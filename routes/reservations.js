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

router.get('/teacher/:id', (req, res) => {
    const teacherReservation = reservationList.filter(reservation => reservation.teacherId == req.params.id);
    res.json(teacherReservation);
});

router.post('/', (req, res) => {
    res.json(addReservation(req));
})

router.patch('/:reservationId', async(req, res) => {
    const reservationId = req.params.reservationId;
    const reservation = await reservationList.find(reservation => reservation.reservationId == reservationId);
    if(!reservation){
        res.status(404).json({error: 'Reservation not found'});
    }
    try{
        reservation.withdrawnDate = req.body.withdrawnDate?? reservation.withdrawnDate;
        reservation.returnDate = req.body.returnDate?? reservation.returnDate;
        reservation.withdrawnHour = req.body.withdrawnHour?? reservation.withdrawnHour;
        reservation.returnHour = req.body.returnHour?? reservation.returnHour;
        reservation.teacherId = req.body.teacherId?? reservation.teacherId;
        res.status(202).json(reservation);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
})

// router.patch('/:itemId', async(req, res) => {
//     const itemId = req.params.itemId
//     const item = await items.find(item => item.itemId == itemId)
//     if(!item){
//         res.status(404).json({error: 'Item not found'})
//     }
//     try{
//         item.name = req.body.name
//         item.stockQuantity = req.body.stockQuantity?? item.stockQuantity
//         item.description = req.body.description?? item.description
//         item.image = req.body.image?? item.image
//         res.status(202).json(item)
//     }
//     catch(err){
//         res.status(500).json({error: err.message})
//     }
// })

router.delete('/:reservationId', (req, res) => {
    reservationList.splice(takeIdReservation(req), 1);
    res.json(reservation);
})

module.exports = router;