import React from 'react';

import axios from 'axios';

var baseUrl = "http://localhost:8090";

const client = axios.create({baseURL:baseUrl,headers:{'content-Type':'application/json',},});

export function getArticles(){
	return client.get(baseUrl+"/api/article")//.then(response=>console.log("Articledata is:"+response.data[0].id));
}

