import express from 'express'
import http from 'http'
import config from './config/index.js'
import api from './api/index.js'
import session from 'express-session';
import passport from './api/v1/services/passportService.js'
const app=express()
app.use(express.json());
app.use(
    session({
        secret: 'mySecretKey',
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());
const server=http.createServer(app)

app.use('/api',api)
server.listen(config.serverport)
