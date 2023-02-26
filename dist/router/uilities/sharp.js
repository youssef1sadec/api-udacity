"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path")); // import path module to get the image paths
var sharp_1 = __importDefault(require("sharp")); // import sharp lib to resize the images
var express_1 = require("express"); //importing express
var fs_1 = __importDefault(require("fs"));
var util_1 = require("util");
var Arouters = (0, express_1.Router)();
var read = (0, util_1.promisify)(fs_1.default.readdir);
Arouters.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var exchange, height, width, sendPath, newPath, oldImgPath, plo_1, coco, lal, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                exchange = req.query.name;
                height = req.query.height;
                width = req.query.width;
                sendPath = "".concat(exchange, "-").concat(width, "x").concat(height, "size.jpg");
                newPath = path_1.default.join("".concat(__dirname, "/../../../client/imags/"), sendPath);
                oldImgPath = path_1.default.join("".concat(__dirname, "/../imgs"), "".concat(exchange, ".jpg"));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 7, , 8]);
                plo_1 = path_1.default.resolve("./client/imags");
                // use sharp lib
                /// use the caching
                console.log(plo_1);
                coco = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var resolve, data, err_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, read(plo_1)];
                            case 1:
                                data = _a.sent();
                                data.filter(function (item) {
                                    if (sendPath === item) {
                                        resolve = item;
                                    }
                                });
                                return [2 /*return*/, resolve];
                            case 2:
                                err_2 = _a.sent();
                                throw err_2;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                return [4 /*yield*/, coco()];
            case 2:
                if (!_a.sent()) return [3 /*break*/, 4];
                return [4 /*yield*/, coco()
                    // console.log("not sharp");
                ];
            case 3:
                lal = _a.sent();
                // console.log("not sharp");
                return [2 /*return*/, res.sendFile("".concat(plo_1, "/").concat(lal))];
            case 4: 
            // console.log("sharp")
            return [4 /*yield*/, (0, sharp_1.default)(oldImgPath)
                    .resize(Number(height), Number(width))
                    .toFile(newPath)];
            case 5:
                // console.log("sharp")
                _a.sent();
                _a.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                err_1 = _a.sent();
                //err at server
                return [2 /*return*/, res.send('server errorS' + err_1)];
            case 8: // return api
            return [2 /*return*/, res.status(200).sendFile(newPath)];
        }
    });
}); });
exports.default = Arouters;
