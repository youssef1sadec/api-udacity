"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var Ruoter_1 = __importDefault(require("./router/Ruoter"));
var realRouter_1 = __importDefault(require("./router/realRouter"));
// print err in console
process.on('uncaughtException', function (err) {
    // errors logs
    console.log(err);
});
var app = (0, express_1.default)();
// static files = all people can access it
app.use(express_1.default.static(path_1.default.join("".concat(__dirname, "/../"), 'client')));
/// the port of the loclhost
var port = 8124;
/// the welcome message
console.log("hello");
app.get("/del", realRouter_1.default);
// call the api
app.use('/api', Ruoter_1.default);
app.get('/', function (_req, res) {
    res.end('hello word');
});
// to listen to the port
app.listen(port, function () {
    console.log("app is working and its port is https://localhost:".concat(port));
});
exports.default = app;
