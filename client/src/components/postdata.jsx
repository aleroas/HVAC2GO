
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

let IsCreated = false
// async function collectData(user){
//     console.log(user)
//     try{
//         console.log(user)
//       const response = await fetch('/api/customers', {
//         method: 'POST',
//         body:{
//             name: user.body.name,
//             email: user.body.email,
//             phoneNumber: user.body.phoneNumber
//         }
//       })
//       if (response.ok){
//         console.log('did it')
//       }
//       else{
//         console.log('close')
//       }
//     }
//     catch(err){
//         console.log(err)
//     }
// }


// export default collectData

function backToHome(){
    if(IsCreated){
        Navigate('/')
    }
}

async function collectData(user) {

    const userData = {
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber
    };
  
    try {
      const response = await fetch('/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // Set appropriate headers
        body: JSON.stringify(userData) // Stringify data for sending
      });
  
      if (response.ok) {
        setIsCreated(true)
        isCreated = true
        const data = await response.json();
        console.log('Data successfully sent:', data);
        backToHome()
        // Handle the received data (e.g., update UI)
      } else {
        console.error('Error sending data:', response.status, await response.text());
      }
    } catch (err) {
      console.error('Error collecting data:', err);
    }
  }


  export default collectData;