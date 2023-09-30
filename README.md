# Outpatient Appointment System

This is a simple outpatient appointment system API built using Node.js and Express.js. It allows users to list doctors, view details of a specific doctor, and book appointments with available doctors.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Listing Doctors](#listing-doctors)
  - [Viewing Doctor Details](#viewing-doctor-details)
  - [Booking Appointments](#booking-appointments)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)


## Features

- List doctors with their specialties and schedules.
- View details of a specific doctor.
- Book appointments with available doctors.
- Limit the number of patients a doctor can see.

## Getting Started

### Prerequisites

To run this project, you will need:

- Node.js installed on your machine.
- npm or yarn package manager.

### Installation

1. Clone this repository to your local machine:

   ```git clone https://github.com/ayushsgithub/pearlThoughts_task.git```

2. Go the folder

   ```cd pearlThoughts_task```

3. Install depencies

   ```npm install```

## Usage

### Listing Doctors
To list all available doctors, make a GET request to the `/doctors` endpoint:

```http://localhost:3000/doctors```

# Viewing Doctor Details

To view details of a specific doctor, make a GET request to the `/doctors/{doctorId}` endpoint, replacing `{doctorId}` with the actual doctor's ID:

```http://localhost:3000/doctors/1```


# API Endpoints

- GET ```/doctors```: List all doctors.

- GET ```/doctors/{doctorId}```: Get details of a specific doctor.

- POST ```/appointments```: Book an appointment with a doctor.


# Contributing

### Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

- Fork the repository.

- Create a new branch for your feature or bug ```fix: git checkout -b feature-name```.

- Make your changes and commit them.

- Push your changes to your fork: ```git push origin feature-name```.

- Create a pull request on the original repository.
