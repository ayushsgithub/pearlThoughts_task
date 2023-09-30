const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Sample data 
const doctors = [
    {
        id: 1,
        name: 'Dr. Smith',
        specialty: 'Cardiologist',
        schedule: ['Monday', 'Wednesday'],
        maxPatients: 3,
    },
    {
        id: 2,
        name: 'Dr. Johnson',
        specialty: 'Dermatologist',
        schedule: ['Tuesday', 'Thursday'],
        maxPatients: 10,
    },
];

const appointments = [];

app.use(bodyParser.json());

// Doctor listing endpoint
app.get('/doctors', (req, res) => {
    res.json(doctors);
});

// Doctor detail endpoint
app.get('/doctors/:doctorId', (req, res) => {
    const doctorId = parseInt(req.params.doctorId);
    const doctor = doctors.find((doc) => doc.id === doctorId);

    if (doctor) {
        res.json(doctor);
    } else {
        res.status(404).json({ message: 'Doctor not found' });
    }
});

// Appointment booking endpoint
app.post('/appointments', (req, res) => {
    const { doctorId, patientName } = req.body;

    const doctor = doctors.find((doc) => doc.id === doctorId);

    if (!doctor) {
        return res.status(404).json({ message: 'Doctor not found' });
    }

    if (doctor.schedule.length === 0 || doctor.maxPatients <= 0) {
        return res.status(400).json({ message: 'Sorry, doctor is not available for appointments' });
    }

    const appointmentCount = appointments.filter((appt) => appt.doctorId === doctorId).length;

    if (appointmentCount >= doctor.maxPatients) {
        return res.status(400).json({ message: 'Doctor appointments are fully booked' });
    }

    const appointment = {
        doctorId,
        patientName,
    };

    appointments.push(appointment);
    const count = doctor.maxPatients - appointmentCount
    res.status(201).json({ message:"Successfully booked appointment", appointment, appointmentsLeft:count});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});