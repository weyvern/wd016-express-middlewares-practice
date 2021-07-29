const { Router } = require('express');
const secure = require('../middlewares/secure');

const usersRouter = Router();

usersRouter.use(secure);

usersRouter.get('/', (req, res) => res.send('USer'));

module.exports = usersRouter;
