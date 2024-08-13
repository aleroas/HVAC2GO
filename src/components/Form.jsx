import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import User from '../../server/models/User'


function Form() {


    const navigate = useNavigate()
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-8 text-center bg-gray-100"
        >
            <form>
                <h1 className="text-4xl font-bold text-gray-800">Lets get you some help!!</h1>
                <p className="mt-4 text-xl text-gray-600"> Please fill out this form and we will send some more information your way </p>
                <div>
                    <input id='first_name' placeholder='First Name' type='text'></input>
                    <input id='last_name' placeholder='Last Name' type='text'></input>
                    <input id='email' placeholder='E-mail' type='text'></input>
                    <input id='phone' placeholder='Phone Number'></input>
                    <input id='address' placeholder='Street Address'></input>
                    <input id='city' placeholder='City'></input>
                    <input id='state' placeholder='State'></input>
                    <input id='zip' placeholder='zip code' type='integer'></input>
                </div>
                <button id='submitBtn' onClick={async (event) => {
                    event.preventDefault()
                    const firstName = document.getElementById('first_name');
                    const lastName = document.getElementById('last_name');
                    const email = document.getElementById('email');

                    const response = await new User(
                        {
                            name: firstName.value,
                            email: email.value,
                            phoneNumber: 4077817287
                        }
                    )
                    if(response){
                        console.log(response)
                    }

                    console.log(firstName.value)
                }}>Submit</button>
                <button onClick={() => navigate('/')}>Start Over</button>
            </form>
        </motion.div>
    );
};

const submitBtn = document.getElementById('submitBtn')


export default Form;






