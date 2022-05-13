"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _usercontroller = require('../controllers/user.controller');

const Routes = _express.Router.call(void 0, );

const userController = new _usercontroller.UserController;

Routes.get('/', userController.index);
Routes.post('/createUser', userController.store);

exports. default = Routes;