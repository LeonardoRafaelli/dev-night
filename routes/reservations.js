const express = require('express');

const router = express.Router();

const reservationList = [
    {
        reservationId: 1,
        withdrawnDate: '2022-03-11',
        returnDate: '2022-03-12',
        withdrawnHour: '8:00',
        returnHour: '9:00',
        teacherId: 1
    },
    {
        reservationId: 2,
        withdrawnDate: '2022-03-13',
        returnDate: '2022-03-14',
        withdrawnHour: '11:00',
        returnHour: '18:00',
        teacherId: 2
    },
];

function getReservationList() {
    return reservationList;
}

function addReservation(req) {
    const reservation = req.body;
    reservation.reservationId = reservationList.length + 1;
    reservationList.push(reservation);
    return reservation;
}

function takeIdReservation(req) {
    const reservationId = req.params.reservationId;
    return reservationList.find(reservation => reservation.reservationId == reservationId);
}


router.get('/', (req, res) => {
    res.json(getReservationList());
});

router.post('/', (req, res) => {
    res.json(addReservation(req));
})

router.put('/:reservationId', (req, res) => {
    const reservation = req.body;
    reservation.reservationId = req.params.reservationId;
    reservationList[takeIdReservation(req)] = reservation;
    res.json(reservation);
    
})

router.delete('/:reservationId', (req, res) => {
    reservationList.splice(takeIdReservation(req), 1);
    res.json(reservation);
})