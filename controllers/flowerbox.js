// DEPENDENCIES
const express = require('express');
const { findById } = require('../models/flowerbox.js');
const router = express.Router()
const Flower = require('../models/flowerboxjs');
const FlowerSeed = require('../models/flowerboxseedseed.js');

// SEED
router.get('/seed', (req, res)=>{
	Flower.create(FlowerSeed, (error, data)=> {
		res.redirect('/flower')
	});
});

//INDEX
router.get('/', (req, res) => {
	Flower.find({}, (err, foundFlowers) => {
		res.render('flower/index.ejs', {
			flowers: foundFlowers
		});
	});
});

router.get('/cart', (req,res)=>{
	Flower.find({}, (err,foundFlowers)=>{
		res.render('flower/cart.ejs', {
			flowers:foundFlowers
		});
	});
});

//NEW
router.get('/new', (req, res)=>{
	res.render('flower/new.ejs')
});


//DELETE
router.delete('/:id', (req,res)=>{
	Flower.findByIdAndRemove(req.params.id, ()=>{
		res.redirect('/flower');
	});
});

//UPDATE
router.put('/:id', (req, res)=>{
	Flower.findByIdAndUpdate(req.params.id, req.body, () => {
			res.redirect(`/flower/${req.params.id}`)
		});
});

//CREATE
router.post('/',(req,res)=>{
	Flower.create(req.body, (err, createdFlower)=>{
		res.redirect('/flower')
	})
})

//EDIT
router.get('/:id/edit', (req, res)=>{
	Flower.findById(req.params.id, (err, foundFlowers)=>{
		res.render('flower/edit.ejs', {
			flower: foundFlowers
		});
	});
});


//SHOW
router.get('/:id', (req,res)=> {
	Flower.findById(req.params.id, (err,foundFlowers)=>{
		res.render('flower/show.ejs', {
			flower: foundFlowers,
		});
	});
});


module.exports = router