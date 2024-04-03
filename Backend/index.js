
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

// const postData ={

//     "companyName": "wallshop",
    
//     "ownerName": "rahul",
    
//     "rollNo": "RA2111031010040",
    
//     "ownerEmail": "sr5752@srmist.edu.in",
    
//     "accessCode": "kJtfKH"
    
//     };


// axios.post('http://20.244.56.144/test/register', postData)
//     .then(response => {
//         console.log('Response:', response.data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

 const authdata={
            "companyName": "wallshop",
            "clientID": "4ef8d104-ea4f-4f47-87d3-ad9a368974a1",
            "clientSecret": "SDKpuJoShxAbXvKd",
            "ownerName": "Rahul",
            "ownerEmail": "sr5752@srmist.edu.in",
          "rollNo":"RA2111031010040"
    }

axios.post('http://20.244.56.144/test/auth', authdata)
.then(response => {
    console.log('Response:', response.data);
})
.catch(error => {
    console.error('Error:', error);
});

const authtoken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTU5MjU5LCJpYXQiOjE3MTIxNTg5NTksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjRlZjhkMTA0LWVhNGYtNGY0Ny04N2QzLWFkOWEzNjg5NzRhMSIsInN1YiI6InNyNTc1MkBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoid2FsbHNob3AiLCJjbGllbnRJRCI6IjRlZjhkMTA0LWVhNGYtNGY0Ny04N2QzLWFkOWEzNjg5NzRhMSIsImNsaWVudFNlY3JldCI6IlNES3B1Sm9TaHhBYlh2S2QiLCJvd25lck5hbWUiOiJyYWh1bCIsIm93bmVyRW1haWwiOiJzcjU3NTJAc3JtaXN0LmVkdS5pbiIsInJvbGxObyI6IlJBMjExMTAzMTAxMDA0MCJ9.VVjqwyvLYI2OwMeLATLi0e_WR4rVPe_BMnsQGoW_hPY';

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


