const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Sample data (dummy doctors with their expertise and city)
const doctors = [
    { name: 'Dr. Rajesh Sharma', expertise: 'Cardiologist', city: 'Mumbai' },
    { name: 'Dr. Priya Singh', expertise: 'Dermatologist', city: 'Delhi' },
    { name: 'Dr. Rohan Patel', expertise: 'Pediatrician', city: 'Bangalore' },
    { name: 'Dr. Neha Gupta', expertise: 'Orthopedic Surgeon', city: 'Hyderabad' },
    { name: 'Dr. Ajay Kumar', expertise: 'Gynecologist', city: 'Chennai' },
    { name: 'Dr. Ananya Joshi', expertise: 'Psychiatrist', city: 'Kolkata' },
    { name: 'Dr. Sunil Verma', expertise: 'Ophthalmologist', city: 'Pune' },
    { name: 'Dr. Anjali Desai', expertise: 'Dentist', city: 'Ahmedabad' },
    { name: 'Dr. Sanjay Mehta', expertise: 'ENT Specialist', city: 'Jaipur' },
    { name: 'Dr. Preeti Shah', expertise: 'General Physician', city: 'Surat' },
    // More dummy data for other cities
    { name: 'Dr. Rahul Singh', expertise: 'Cardiologist', city: 'Lucknow' },
    { name: 'Dr. Priyanka Sharma', expertise: 'Dermatologist', city: 'Kanpur' },
    { name: 'Dr. Mohan Kumar', expertise: 'Pediatrician', city: 'Patna' },
    { name: 'Dr. Kavita Gupta', expertise: 'Orthopedic Surgeon', city: 'Ranchi' },
    { name: 'Dr. Amit Patel', expertise: 'Gynecologist', city: 'Ahmedabad' },
    { name: 'Dr. Meera Sen', expertise: 'Psychiatrist', city: 'Indore' },
    { name: 'Dr. Rakesh Verma', expertise: 'Ophthalmologist', city: 'Chandigarh' },
    { name: 'Dr. Kiran Desai', expertise: 'Dentist', city: 'Nagpur' },
    { name: 'Dr. Anil Mehra', expertise: 'ENT Specialist', city: 'Kanpur' },
    { name: 'Dr. Sneha Jain', expertise: 'General Physician', city: 'Nashik' },
    // More doctors and cities can be added as needed
];

// Endpoint to get all doctors
app.get('/doctors', (req, res) => {
    res.json(doctors);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
