import express from 'express';
import cors from 'cors';

const app = express();
const PORT =  5000;

app.use(cors());
app.use(express.json());

const LOGIN_URL = 'https://orgfarm-c4235fd9d8-dev-ed.develop.my.salesforce.com';
const CLIENT_ID = '3MVG91oqviqJKoEF8vCuUp9weYZ9nkGjR..Ve3QEn.LTI_v3aWooqXCjysZdFuG10IfAXXEmX1B2RnGMXJf6t';
const CLIENT_SECRET = '9F1D2720294E0BE4571EC3CCC0BC76FD6560D48B1B6DF959D095CE311A9D2B0C';

// Helper function to fetch Salesforce OAuth Access Token
async function getSalesforceAuth() {
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
    throw new Error(tokenData.error_description || 'Salesforce OAuth Token Error');
  }

  return {
    accessToken: tokenData.access_token,
    instanceUrl: tokenData.instance_url,
    authHeaders: {
      'Authorization': `Bearer ${tokenData.access_token}`,
      'Content-Type': 'application/json'
    }
  };
}

// ----------------------------------------------------
// 1. ROUTE: PROJECT ENQUIRY CREATION (Existing)
// ----------------------------------------------------
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
    const { instanceUrl, authHeaders } = await getSalesforceAuth();

    // Check if Contact exists or create new
    let contactId = null;
    const queryContact = await fetch(
      `${instanceUrl}/services/data/v59.0/query/?q=${encodeURIComponent(`SELECT Id FROM Contact WHERE Email = '${email}' LIMIT 1`)}`,
      { headers: authHeaders }
    );
    const contactQueryResult = await queryContact.json();

    if (contactQueryResult.records && contactQueryResult.records.length > 0) {
      contactId = contactQueryResult.records[0].Id;
      console.log(`Existing Contact Found: ${contactId}`);
    } else {
      const newContact = await fetch(`${instanceUrl}/services/data/v59.0/sobjects/Contact`, {
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
      console.log(`New Contact Created: ${contactId}`);
    }

    // Create Project_Enquiry__c Record
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

    const enquiryResponse = await fetch(`${instanceUrl}/services/data/v59.0/sobjects/Project_Enquiry__c`, {
      method: 'POST',
      headers: authHeaders,
      body: JSON.stringify(enquiryPayload)
    });

    const enquiryResult = await enquiryResponse.json();

    if (!enquiryResponse.ok) {
      console.error('Enquiry Creation Error:', enquiryResult);
      return res.status(enquiryResponse.status).json({ success: false, errors: enquiryResult });
    }

    console.log(`Project Enquiry Created: ${enquiryResult.id}`);

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

// ----------------------------------------------------
// 2. NEW ROUTE: STUDENT APPLICATION (Student__c)
// ----------------------------------------------------
app.post('/api/salesforce/student', async (req, res) => {
  const { 
    name, 
    email, 
    phone, 
    college, 
    degree, 
    graduationYear, 
    track, 
    githubOrLinkedin, 
    message 
  } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ success: false, message: 'Name, Email aur Phone mandatory hain.' });
  }

  const nameParts = name.trim().split(' ');
  const firstName = nameParts.length > 1 ? nameParts.slice(0, -1).join(' ') : '';
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : name.trim();

  try {
    const { instanceUrl, authHeaders } = await getSalesforceAuth();

    // Check if Contact exists or create new for student
    let contactId = null;
    const queryContact = await fetch(
      `${instanceUrl}/services/data/v59.0/query/?q=${encodeURIComponent(`SELECT Id FROM Contact WHERE Email = '${email}' LIMIT 1`)}`,
      { headers: authHeaders }
    );
    const contactQueryResult = await queryContact.json();

    if (contactQueryResult.records && contactQueryResult.records.length > 0) {
      contactId = contactQueryResult.records[0].Id;
      console.log(`Existing Student Contact Found: ${contactId}`);
    } else {
      const newContact = await fetch(`${instanceUrl}/services/data/v59.0/sobjects/Contact`, {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify({
          FirstName: firstName,
          LastName: lastName,
          Email: email,
          Phone: phone,
          LeadSource: 'Career Internship Portal'
        })
      });
      const contactResult = await newContact.json();
      if (!newContact.ok) {
        throw new Error(JSON.stringify(contactResult));
      }
      contactId = contactResult.id;
      console.log(`New Student Contact Created: ${contactId}`);
    }

    // Insert into Student__c
    const studentPayload = {
      Student_Name__c: name,
      Email__c: email,
      Phone__c: phone,
      College__c: college || 'Not Disclosed',
      Degree__c: degree || 'Not Disclosed',
      Graduation_Year__c: String(graduationYear || '2025'),
      Selected_Track__c: track,
      Portfolio_URL__c: githubOrLinkedin || '',
      Statement_of_Purpose__c: message || 'Direct submission from Careers page',
      Application_Status__c: 'New'
    };

    const studentResponse = await fetch(`${instanceUrl}/services/data/v59.0/sobjects/Student__c`, {
      method: 'POST',
      headers: authHeaders,
      body: JSON.stringify(studentPayload)
    });

    const studentResult = await studentResponse.json();

    if (!studentResponse.ok) {
      console.error('Student__c Record Creation Error:', studentResult);
      return res.status(studentResponse.status).json({ success: false, errors: studentResult });
    }

    console.log(`Student Record Created: ${studentResult.id}`);

    return res.status(200).json({
      success: true,
      studentId: studentResult.id,
      contactId: contactId,
      message: 'Student application successfully stored in Salesforce Student records!'
    });

  } catch (error) {
    console.error('Student API Error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Sparklynh Sync Server running on port ${PORT}`);
});