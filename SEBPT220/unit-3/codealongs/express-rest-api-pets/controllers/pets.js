// 1.import the Pet model in our controller 
const Pet = require('../models/pet.js')
// import express and router
const express = require('express');
const router = express.Router()

// 2. use post() request method to create a pet object.
router.post('/', async(req, res) => {
    //  add a message to test the route
    // res.json({message: 'Create Route'})

    // create a new pet with the data from req.body
    try{
        const createdPet = await Pet.create(req.body);
        res.status(201).json(createdPet); //returns 201 if a pet is created
    } catch(error) {
        res.status(500).json({error: error.message})
    }
    
})

// 3. use get() request method to find all pets. This is an index route 
router.get('/', async(req,res) => {
    // add a message to test the route
    // res.json({message: 'Index Route'})

    // find all pets 
    try {
        foundPets = await Pet.find();
        res.status(200).json(foundPets); // returns 200 if all pets are found
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
})

// 4. use get() request method to find one pet by its id. /pets/:petId
router.get('/:petId', async(req,res) => {
    // add a message to test the route
    // res.json({ message: `Show route with the param ${req.params.petId}` });

    // add a query to find a single pet
    try{
        const foundPet = await Pet.findById(req.params.petId);
        // add error handling if a pet is not found
        if (!foundPet){
            res.status(404);
            throw new Error('Pet not found.')
        }
        res.status(200).json(foundPet); // returns 200 if task was sucessful

    } catch(error){
        // add error handling code for 4040 errors
        if(res.statusCode === 404){
            res.json({error: error.message})
        } else {
            // Add else statement to handle all other errors
            res.status(500).json({ error: error.message });
          }
        
    }
  
    
})


// 5. use delete() request method to remove a pet by selecting its id
router.delete('/:petId', async(req,res) => {

    // find and delete a pet
    try {
        const deletePet = await Pet.findByIdAndDelete(req.params.petId);
         // add error handling if a pet is not found
         if (!deletePet){
            res.status(404);
            throw new Error('Pet not found.')
        }
        res.status(200).json(deletePet); 
    } catch (error) {
        // add error handling code for 4040 errors
        if(res.statusCode === 404){
            res.json({error: error.message})
        } else {
            // Add else statement to handle all other errors
            res.status(500).json({ error: error.message });
        }
    }
})


// 6. use put() request method to update a pet by selecting its id
router.put('/:petId', async (req, res) => {
    // Add a message to test the route
    //   res.json({ message: `Update route with the param ${req.params.petId}` });

    try {
        // Add query to update a single pet
        const updatedPet = await Pet.findByIdAndUpdate(req.params.petId, req.body);
        // Add a check for a not found pet
        if (!updatedPet) {
            res.status(404);
            throw new Error('Pet not found.');
        }
        // Add a JSON response with the updated pet
        res.status(200).json(updatedPet);
      } catch (error) {
            // Add code for errors
        if (res.statusCode === 404) {
            res.json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
     }


  });













// export the router 
module.exports = router;