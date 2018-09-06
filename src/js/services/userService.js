import React from 'react';

import axios from 'axios';
import config from 'config';

import HttpResponseWrapper from '../BusinessObjects/HttpResponseWrapper';

var baseUrl = `${config.apiUrl}`;//"http://localhost:8090";

const client = axios.create({baseURL:baseUrl,headers:{'content-Type':'application/json',},});

export function authenticateUser(credentials){
	return client.post(baseUrl+"/login",credentials).
				then(response=>{ 
					return new HttpResponseWrapper(response);}).
				catch(err => {return err;})
} 

/*

sign-up:
POST http://localhost:8090/api/user/sign-up HTTP/1.1
User-Agent: Fiddler
Host: localhost:8090
content-type: application/json
Content-Length: 59

{
    "userName": "admin2",
    "password": "password"
}

login:
POST http://localhost:8090/login HTTP/1.1
User-Agent: Fiddler
Host: localhost:8090
content-type: application/json
Content-Length: 59

{
    "username": "admin2",
    "password": "password"
}

GET http://localhost:8090/api/article/ HTTP/1.1
User-Agent: Fiddler
Host: localhost:8090
content-type: application/json
Content-Length: 59
Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjIiLCJleHAiOjE1MzM2NDI4MTB9.np_-pAD2yCIl_tv7vpgELdKkAncDmbWlbbUWW2ITGJzXoq8bkYXJhfWXn6Ti9QKLoIPZQ3ggYIHD9h-QCquV1g



*/