const {Router} = require('express');
const router = Router();

router.get("/", (req, res, next)=>{
  res.send("ho")
})


module.exports = router; // export the router object