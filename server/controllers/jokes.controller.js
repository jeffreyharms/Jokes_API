const Joke = require("./../models/jokes.model")

module.exports.testApi = (req, res) => {
    res.json({Status:"Functioning Properly"})
}

module.exports.allJokes = (req, res) => {
    Joke.find()
        .then(jokes => res.json(jokes))
        .catch(err => res.json(err))
}

module.exports.oneJoke = (req, res) => {
    Joke.findOne({_id:req.params.id})
        .then(oneJoke => res.json(oneJoke))
        .catch(err => res.json(err))
}

module.exports.addJoke = (req, res) => {
    const newJoke = req.body
    Joke.create(newJoke)
        .then(joke => res.json(joke))
        .catch(err => res.json(err))
}

module.exports.updateJoke = (req, res) => {
    const idParams = req.params.id
    const updateVal = req.body
    Joke.findOneAndUpdate({_id : req.params.id}, updateVal, {new:true, runValidators:true})
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.json(err))
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(message => res.json(message))
        .catch(err => res.json(err))
}