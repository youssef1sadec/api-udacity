"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express"); // importing express
var sharp_1 = __importDefault(require("./../router/uilities/sharp")); // import the sharp file
var routers = (0, express_1.Router)();
// creating a middleWare for filter
var apiMiddleWare = function (req, res, next) {
    // if there missing at any query
    if (!req.query.name || !req.query.height || !req.query.width) {
        res.status(400);
        return res.send('missing query width and height, query is name and width and height   ');
    }
    //if the input for the h & w is not a number
    if (isNaN(Number(req.query.height)) || isNaN(Number(req.query.width))) {
        res.status(400);
        return res.send('the width and height must be a numbers');
    }
    next();
};
routers.get('/', apiMiddleWare, sharp_1.default); // call the middleWare local
exports.default = routers;
