
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/test/register', (req, res) => {

    console.log('Received data:', req.body);

    res.send('Data received successfully!');
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const postData ={

    "companyName": "wallshop",
    
    "ownerName": "rahul",
    
    "rollNo": "11",
    
    "ownerEmail": "sr5752@srmist.edu.in",
    
    "accessCode": "bntKpm"
    
    };


// axios.post('http://20.244.56.144/test/register', postData)
//     .then(response => {
//         console.log('Response:', response.data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

//  const authdata={
//             "companyName": "wallshop",
//             "clientID": "75458bf4-7f3d-48b7-bced-1aa789dd6735",
//             "clientSecret": "MnTAPkIujGYaoqBg",
//             "ownerName": "Rahul",
//             "ownerEmail": "sr5752@srmist.edu.in",
//           "rollNo":"11"
//     }

// axios.post('http://20.244.56.144/test/auth', authdata)
// .then(response => {
//     console.log('Response:', response.data);
// })
// .catch(error => {
//     console.error('Error:', error);
// });

const authtoken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTU1MDA1LCJpYXQiOjE3MTIxNTQ3MDUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijc1NDU4YmY0LTdmM2QtNDhiNy1iY2VkLTFhYTc4OWRkNjczNSIsInN1YiI6InNyNTc1MkBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoid2FsbHNob3AiLCJjbGllbnRJRCI6Ijc1NDU4YmY0LTdmM2QtNDhiNy1iY2VkLTFhYTc4OWRkNjczNSIsImNsaWVudFNlY3JldCI6Ik1uVEFQa0l1akdZYW9xQmciLCJvd25lck5hbWUiOiJSYWh1bCIsIm93bmVyRW1haWwiOiJzcjU3NTJAc3JtaXN0LmVkdS5pbiIsInJvbGxObyI6IjExIn0.qlfIwRSGt7wVXFrlIyF8jd4JQxXKg9flgyhhKxxDPog';

axios.get('http://20.244.56.144/test/companies/:companyname/categories/:categoryname/products?top=n&minPrice=p&maxPrice=q',{
    headers: {
        'Authorization': `Bearer ${authtoken}`
      }
})
  .then(response => {
    // Handle successful response
    console.log('Response data:', response.data);
  })
  .catch(error => {
    // Handle error
    console.error('Error fetching data:', error);
  });


  axios.get('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000',{
    headers: {
        'Authorization': `Bearer ${authtoken}`
      }
})
  .then(response => {
    // Handle successful response
    console.log('Response data:', response.data);
  })
  .catch(error => {
    // Handle error
    console.error('Error fetching data:', error);
  });


