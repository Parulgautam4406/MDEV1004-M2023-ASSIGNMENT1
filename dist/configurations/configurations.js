"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    mongoURI: process.env.MONGODB_URI || 'mongodb+srv://Gaurav:HgGiSJ0voqaKhNbc@moviecluster.deilets.mongodb.net/movies',
    port: process.env.PORT || '3000'
};
exports.default = config;
