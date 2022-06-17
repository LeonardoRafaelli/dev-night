const express = require("express");
const router = express.Router();
router.use(express.json());

const storage = [
  {
    id: 1,
    wall: "Parede 1",
    center: "Centro direito",
    wardrobe: "Armario 1",
    drawer: "Gaveta 1",
  },
  {
    id: 2,
    wall: "Parede 2",
    center: "Centro direito",
    wardrobe: "Armario 2",
    drawer: "Gaveta 1",
  },
  {
    id: 3,
    wall: "Parede 3",
    center: "Centro direito",
    wardrobe: "Armario 3",
    drawer: "Gaveta 1",
  },
];

router.get("/", (req, res) => {
  res.json(storage);
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const item = storage.find((item) => item.id == id);
    if(!item){
        res.status(404).send("Item not found");
    }
    res.json(item);
  });

router.post("/", (req, res) => {
    const item = req.body;
    item.id = storage.length + 1;
    storage.push(item);
    res.json(item);
})

router.patch("/:id", (req, res) => {
    const id = req.params.id;
    const item = req.body;
    const index = storage.findIndex(item => item.id == id);
    item.id = id
    storage[index] = item;
    res.json(item);
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const index = storage.findIndex(item => item.id == id);
    storage.splice(index, 1);
    res.json(storage);
})

module.exports = router
