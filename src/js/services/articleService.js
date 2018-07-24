import React from 'react';

import axios from 'axios';

import HttpResponseWrapper from '../BusinessObjects/HttpResponseWrapper';

var baseUrl = "http://localhost:8090";

const client = axios.create({baseURL:baseUrl,headers:{'content-Type':'application/json',},});

export function getArticles(){
	return client.get(baseUrl+"/api/article").
				then(response=>{ 
					return new HttpResponseWrapper(response);}).
				catch(err => {return err;})
} 

export function createArticle(article){
	return 	client.post(baseUrl+"/api/article",{title:article.title}).
				then(response=>{
					return new HttpResponseWrapper(response);
					}).
				catch(err => {return err;});
}


export function deleteArticle(id){
	return 	client.delete(baseUrl+"/api/article/"+id).
				then(response=>{
					return new HttpResponseWrapper(response);
					}).
				catch(err => {return err;});
}

