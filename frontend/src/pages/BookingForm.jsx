import React, { useState, useEffect } from 'react';
import { BsX } from 'react-icons/bs';
import axios from 'axios'; // Import Axios library

const BookingForm = ({ onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        age: '',
        city: '',
        company: '',
        chiefComplaints: '',
        previousExperience: '',
        selectedDoctor: '', // Added selectedDoctor field
    });
    const [doctors, setDoctors] = useState([]); // State to hold doctors data

    useEffect(() => {
        // Fetch doctors data from the backend when the component mounts
        axios.get('http://localhost:3000/doctors') // Fetch data from the backend endpoint
            .then(response => {
                setDoctors(response.data);
            })
            .catch(error => {
                console.error('Error fetching doctors:', error);
            });
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };
    const handleSubmit = (e) => {
        // e.preventDefault();
        // Handle form submission
        console.log(formData); // For demonstration purposes
        // Show a success message to the user
        alert('Thank you for booking an appointment! Check your email for more details.');
        // Close the modal after submission
        onClose();
    };
    const handleClose = () => {
        // Define your handleClose logic here
        console.log('Closing the modal');
        setShowBookingForm(false); // Close the modal
    };


    return (
<div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
            <button className="absolute top-2 right-2 text-gray-600" onClick={handleClose}><BsX /></button>
                <h2 className="text-2xl font-bold mb-4">Request an Appointment</h2>
                {step === 1 && (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Step 1: Name and Phone Number */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                        </div>
                        <div>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                        </div>
                        {/* Next Button */}
                        <div className="text-right">
                            <button type="button" onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Next</button>
                        </div>
                    </form>
                )}
                {step === 2 && (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Step 2: Age, City, and Company */}
                        <div>
                            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                            <input type="text" id="age" name="age" value={formData.age} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                        </div>
                        {/* Next Button */}
                        <div className="text-right">
                            <button type="button" onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Next</button>
                        </div>
                    </form>
                )}
                {step === 3 && (
    <form onSubmit={handleSubmit} className="space-y-4">
        {/* Step 3: Chief Complaints and Previous Experience */}
        <div>
            <label htmlFor="chiefComplaints" className="block text-sm font-medium text-gray-700">Chief Complaints</label>
            <textarea id="chiefComplaints" name="chiefComplaints" value={formData.chiefComplaints} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full h-32"></textarea>
        </div>
        <div>
            <label htmlFor="previousExperience" className="block text-sm font-medium text-gray-700">Previous Experience with Physiotherapy</label>
            <textarea id="previousExperience" name="previousExperience" value={formData.previousExperience} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full h-32"></textarea>
        </div>
        {/* Previous and Next Buttons */}
        <div className="flex justify-between">
            <button type="button" onClick={handlePrevious} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">Previous</button>
            <button type="button" onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Next</button>
        </div>
    </form>
)}
{step === 4 && (
    <form onSubmit={handleSubmit} className="space-y-4">
        {/* Step 4: Doctor Selection */}
        <div>
            <label htmlFor="selectedDoctor" className="block text-sm font-medium text-gray-700">Select Doctor</label>
            <select id="selectedDoctor" name="selectedDoctor" value={formData.selectedDoctor} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full">
                <option value="">Select Doctor</option>
                {doctors.map((doctor, index) => (
                    <option key={index} value={doctor.name}>{doctor.name} - {doctor.city}</option>
                ))}
            </select>
        </div>
        {/* Previous and Submit Buttons */}
        <div className="flex justify-between">
            <button type="button" onClick={handlePrevious} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">Previous</button>
            <button type="submit" onClick={handleClose} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
        </div>
    </form>
)}

            </div>
        </div>
    );
};

export default BookingForm;
