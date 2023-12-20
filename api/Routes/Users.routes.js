const express = require('express');
const router = express.Router();
const UsersAPI = require('../UsersData');
// [GET] Users

router.get('/', (req, res) => {
  res.json(UsersAPI);
})

router.get('/api/users/:_id', (req, res) => {
  const { _id } = req.params;
  const user = UsersAPI.find(user => user.id === parseInt(_id));

  if(user) {
    res.json(user)
  } else {
    res.json({message: 'Not found'})
  }
});

router.get('/api/users/names/:userName', (req, res)=> {
  const { userName } = req.params;
  const users = UsersAPI.find(user => user.username.toLocaleLowerCase().includes(userName.toLocaleLowerCase()));

  if(users){
    res.json(users);
  } else {
    res.json({message: 'Not found'})
  }
});

module.exports = router;
