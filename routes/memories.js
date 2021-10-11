const Memory = require("../models/Memory");
const mongoose = require('mongoose');
const router = require("express").Router();


//get all memories
router.get('/', (req, res, next) => {
  console.log(req.session.user)
  Memory.find()
    .then(memories => {
      res.status(200).json(memories);
    })
    .catch(err => next(err));
});

// get user's audio files
router.get("/user/:id", (req, res, next) => {
  Memory.find({ User: req.params.id })
  .then(memories => {
    console.log(memories);
    res.status(200).json(memories)
  })
  .catch((err) => next(err));
});



//create a  memory
router.post('/add', (req, res, next) => {
  const { title, description, pic, tagline, radius, latitude, longitude, privacy} = req.body;
  console.log('This is the session from post route: ', req.session.user)

  Memory.create({
    title: title,
    description: description,
    pic: '',
    tagline: tagline,
    tags: '',
    latitude: latitude,
    longitude: longitude,
    radius: radius,
    User: req.session.user._id,
    createdAt: null,
    likeCount: 0,
    privacy: privacy

  })
    .then(memory => {
      res.status(201).json(memory);
    })
    .catch(err => {
      next(err);
    })
})


//get a specific memory

router.get('/:id', (req, res, next) => {
  Memory.findById(req.params.id)
    .then(memory => {
      //check for valid id
      //if (!mongoose.Types.ObjectId.isValid(req.params.id)){}

      if (!memory) {
        res.status(404).json(memory);
      } else {
        res.status(200).json(memory);
      }

    })
    .catch(err => {
      next(err);
    })
});


//update a memory
router.put('/:id', (req, res, next) => {
  const { title, description, pic, tagline, latitude, longitude, radius } = req.body;
  Memory.findByIdAndUpdate(req.params.id, { title: title, description: description, pic: pic, tagline: tagline, latitude: latitude, longitude: longitude, radius: radius }, { new: true })
    .then(updatedMemory => {
      res.status(200).json(updatedMemory);
    })
    .catch(err => next(err));

});

router.delete('/:id', (req, res, next) => {
  Memory.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: 'memory deleted' });
    })
});




module.exports = router;
