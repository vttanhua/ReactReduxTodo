import React from 'react';

import axios from 'axios';
import config from 'config';

import HttpResponseWrapper from '../BusinessObjects/HttpResponseWrapper';

var baseUrl = `${config.apiUrl}`;//"http://localhost:8090";

  function requestHeaders() {
    return {'AUTHORIZATION': `${sessionStorage.jwt}`, 'content-Type':`application/json`}
  }

 // const headers = this.requestHeaders();

const client = axios.create({baseURL:baseUrl,headers:{'content-Type':'application/json',},});

export function getArticles(){
	return axios.create({baseURL:baseUrl,headers:requestHeaders()}).get(baseUrl+"/api/article").
				then(response=>{ 
					return new HttpResponseWrapper(response);}).
				catch(err => {return err;})
/*	return client.get(baseUrl+"/api/article").
				then(response=>{ 
					return new HttpResponseWrapper(response);}).
				catch(err => {return err;})
*/
} 

export function createArticle(article){
	return 	axios.create({baseURL:baseUrl,headers:requestHeaders()}).post(baseUrl+"/api/article",{title:article.title}).
				then(response=>{
					return new HttpResponseWrapper(response);
					}).
				catch(err => {return err;});
}

export function updateArticle(article){
	console.log("in update article id is "+article.id+" title is: " +article.title);
	return 	axios.create({baseURL:baseUrl,headers:requestHeaders()}).put(baseUrl+"/api/article/"+article.id,{title:article.title, id:article.id}).
				then(response=>{
					console.log("update article response status: "+response.status);
					return new HttpResponseWrapper(response);
					}).
				catch(err => {return err;});
}


export function deleteArticle(id){
	return 	axios.create({baseURL:baseUrl,headers:requestHeaders()}).delete(baseUrl+"/api/article/"+id).
				then(response=>{
					return new HttpResponseWrapper(response);
					}).
				catch(err => {return err;});
}

