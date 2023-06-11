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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movieModel_1 = __importDefault(require("../models/movieModel"));
const logger_1 = __importDefault(require("../logger"));
/**
 *
 */
class MovieController {
    /**
     * The method to call when the.
     *
     * @param req
     * @param res
     */
    getTopMovies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const movies = yield movieModel_1.default.find().limit(20).lean();
                logger_1.default.info("Found movies");
                res.json(movies);
            }
            catch (error) {
                logger_1.default.error("Error", error);
                res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
}
exports.default = new MovieController();
