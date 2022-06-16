const express = require('express');

const router = express.Router();

const reservationList = [
    {
        reservation_id: 1,
        withdrawn_date: '2022-03-11',
        return_date: '2022-03-12',
        withdrawn_hour: '8:00',
        return_hour: '9:00',
        teacher_id: 1
    },
    {
        reservation_id: 2,
        withdrawn_date: '2022-03-13',
        return_date: '2022-03-14',
        withdrawn_hour: '11:00',
        return_hour: '18:00',
        teacher_id: 2
    },
];

function getReservationList() {
    return reservationList;
}

function addReservation(req) {
    const reservation = req.body;
    reservation.reservation_id = reservationList.length + 1;
    reservationList.push(reservation);
    return reservation;
}

function takeIdReservation(req) {
    const reservation_id = req.params.reservation_id;
    return reservationList.find(reservation => reservation.reservation_id == reservation_id);
}


router.get('/', (req, res) => {
    res.json(getReservationList());
});

router.post('/', (req, res) => {
    res.json(addReservation(req));
})

router.put('/:reservation_id', (req, res) => {
    const reservation = req.body;
    reservation.reservation_id = req.params.reservation_id;
    reservationList[takeIdReservation(req)] = reservation;
    res.json(reservation);
    
})

router.delete('/:reservation_id', (req, res) => {
    reservationList.splice(takeIdReservation(req), 1);
    res.json(reservation);
})