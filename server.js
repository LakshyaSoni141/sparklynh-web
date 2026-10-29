import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const LOGIN_URL = 'https://orgfarm-c4235fd9d8-dev-ed.develop.my.salesforce.com';
const CLIENT_ID = '3MVG91oqviqJKoEF8vCuUp9weYZ9nkGjR..Ve3QEn.LTI_v3aWooqXCjysZdFuG10IfAXXEmX1B2RnGMXJf6t';
const CLIENT_SECRET = '9F1D2720294E0BE4571EC3CCC0BC76FD6560D48B1B6DF959D095CE311A9D2B0C';

app.post('/api/salesforce/enquiry', async (req, res) => {
  const { 
    name, 
    email, 
    phone, 
    company, 
    service, 
    scope, 
    timeline, 
    addons, 
    budget, 
    meetingSlot,
    message 
  } = req.body;

  if (!name || !email) {
    return res.status(400).json({ success: false, message: 'Name aur Email mandatory hain.' });
  }

  const nameParts = name.trim().split(' ');
  const firstName = nameParts.length > 1 ? nameParts.slice(0, -1).join(' ') : '';
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : name.trim();

  try {
    // 1. Get OAuth Access Token
    const tokenParams = new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    });

    const tokenResponse = await fetch(`${LOGIN_URL}/services/oauth2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: tokenParams.toString()
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error('OAuth Token Error:', tokenData);
      return res.status(tokenResponse.status).json({ success: false, message: tokenData.error_description });
    }

    const { access_token, instance_url } = tokenData;
    const authHeaders = {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    };

    // 2. Check if Contact already exists or create new Contact
    let contactId = null;
    const queryContact = await fetch(
      `${instance_url}/services/data/v59.0/query/?q=${encodeURIComponent(`SELECT Id FROM Contact WHERE Email = '${email}' LIMIT 1`)}`,
      { headers: authHeaders }
    );
    const contactQueryResult = await queryContact.json();

    if (contactQueryResult.records && contactQueryResult.records.length > 0) {
      contactId = contactQueryResult.records[0].Id;
      console.log(`Existing Contact Found: ${contactId}`);
    } else {
      const newContact = await fetch(`${instance_url}/services/data/v59.0/sobjects/Contact`, {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify({
          FirstName: firstName,
          LastName: lastName,
          Email: email,
          Phone: phone,
          LeadSource: 'Website Project Estimator'
        })
      });
      const contactResult = await newContact.json();
      if (!newContact.ok) {
        throw new Error(JSON.stringify(contactResult));
      }
      contactId = contactResult.id;
      console.log(` New Contact Created: ${contactId}`);
    }

    // 3. Create Project_Enquiry__c Record
    const enquiryPayload = {
      Contact__c: contactId,
      Email__c: email,
      Phone__c: phone,
      Company__c: company || 'Not Specified',
      Tech_Track__c: service,
      Scope__c: scope,
      Delivery_Timeline__c: timeline,
      Estimated_Budget__c: budget,
      Add_Ons__c: addons ? addons.join(', ') : '',
      Preferred_Meeting_Slot__c: meetingSlot || 'Flexible',
      Project_Notes__c: message || 'N/A'
    };

    const enquiryResponse = await fetch(`${instance_url}/services/data/v59.0/sobjects/Project_Enquiry__c`, {
      method: 'POST',
      headers: authHeaders,
      body: JSON.stringify(enquiryPayload)
    });

    const enquiryResult = await enquiryResponse.json();

    if (!enquiryResponse.ok) {
      console.error('Enquiry Creation Error:', enquiryResult);
      return res.status(enquiryResponse.status).json({ success: false, errors: enquiryResult });
    }

    console.log(` Project Enquiry Created: ${enquiryResult.id}`);

    return res.status(200).json({
      success: true,
      enquiryId: enquiryResult.id,
      contactId: contactId,
      message: 'Enquiry created successfully. Salesforce Flow will trigger email.'
    });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Sparklynh Sync Server running on port ${PORT}`);
});