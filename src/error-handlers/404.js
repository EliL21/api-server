'use strict';

modules.exports = (req, res , next) => {
  res.ststus(404).send({
    error: 404, 
    route: req.baseurl,
    message: 'Not Found',

  });
};