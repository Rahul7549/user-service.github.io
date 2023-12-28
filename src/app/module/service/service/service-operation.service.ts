import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment.development'
@Injectable({
  providedIn: 'root'
})
export class ServiceOperationService {

  baseUrl=environment.baseUrl;
  serviceList:Array<any>=[
    {
        'id':'fgdj7493y4r',
        'title':'service-1',
        'status':'active',
        'description':'lifecycle hook,get the list of users from the mock API endpoint and print the data in the console or bind it in',
    },
    {
      'id':'fgdj7493y4r',
      'title':'service-2',
      'status':'deactive',
      'description':'lifecycle hook,get the list of users from the mock API endpoint and print the data in the console or bind it in',
  },
  {
    'id':'fgdj7493y4r',
    'title':'service-4',
    'status':'active',
    'description':'lifecycle hook,get the list of users from the mock API endpoint and print the data in the console or bind it in',
},
{
  'id':'fgdj7493y4r',
  'title':'service-3',
  'status':'active',
  'description':'lifecycle hook,get the list of users from the mock API endpoint and print the data in the console or bind it in',
},
{
  'id':'fgdj7493y4r',
  'title':'service-4',
  'status':'deactive',
  'description':'lifecycle hook,get the list of users from the mock API endpoint and print the data in the console or bind it in',
},
{
  'id':'fgdj7493y4r',
  'title':'service-2',
  'status':'active',
  'description':'lifecycle hook,get the list of users from the mock API endpoint and print the data in the console or bind it in',
},

{
  'id':'fgdj7493y4r',
  'title':'service-3',
  'status':'deactive',
  'description':'lifecycle hook,get the list of users from the mock API endpoint and print the data in the console or bind it in',
},
{
'id':'fgdj7493y4r',
'title':'service-4',
'status':'active',
'description':'lifecycle hook,get the list of users from the mock API endpoint and print the data in the console or bind it in',
},
{
'id':'fgdj7493y4r',
'title':'service-5',
'status':'deactive',
'description':'lifecycle hook,get the list of users from the mock API endpoint and print the data in the console or bind it in',
},
{
'id':'fgdj7493y4r',
'title':'service-3',
'status':'deactive',
'description':'lifecycle hook,get the list of users from the mock API endpoint and print the data in the console or bind it in',
},

    
]

productList:Array<any>=[
  {
    'id':'fgdj7493y4r',
    'title':'product-1',
    'status':'active',
    'description':'Get data-driven insights from a global leader in online surveys.',
},
{
  'id':'fgdj7493y4r',
  'title':'product-2',
  'status':'active',
  'description':'Get data-driven insights from a global leader in online surveys.',
},
{
  'id':'fgdj7493y4r',
  'title':'product-3',
  'status':'active',
  'description':'Get data-driven insights from a global leader in online surveys.',
},
{
  'id':'fgdj7493y4r',
  'title':'product-4',
  'status':'active',
  'description':'Get data-driven insights from a global leader in online surveys.',
},
]

typeOfSurvay:Array<any>=[
  {
    "title":'Customer feedback'
  },
  {
    "title":'Meeting or event feedback'
  },
  {
    "title":'Registration or contact form'
  },
  {
    "title":'Market research'
  },
  {
    "title":'employee engagement'
  },
  {
    "title":'Other'
  }
]

projectList:Array<any>=[
  {
    'title':'Enterprise',
    'description':'Get more security & control over your survey data'
  },
  {
    'title':'Audience',
    'description':'Collect survey responses from our global consumer panel'
  },
  {
    'title':'Integrations & Plug-ins',
    'description':'Easily connect survey data to existing business systems'
  },
  {
    'title':'CX',
    'description':'Understand & improve customer experience (NPS®)'
  },
  {
    'title':'Engage',
    'description':'Understand & increase employee engagement'
  },
  {
    'title':'TechValidate',
    'description':'Create marketing content from customer feedback'
  }
]

helpList:Array<any>=[
  {
      'title':'Help Center',
      'description':'Find quick answers to your questions'
  },
  {
    'title':'Curiosity at Work',
    'description':'Get inspiration on our blog'
}
]
  constructor(private http:HttpClient) { }


  fetchServiceList(){
    let reqUrl=`${this.baseUrl}/service`;
    return this.http.get(reqUrl)
  }
  
  fetchRequestedService(userEmial:string){
    let reqUrl=`${this.baseUrl}/requested-service?email=${userEmial}`;
    return this.http.get(reqUrl);
  }

  fetchServiceById(servideId:number){
    return this.serviceList.find(service=> service.id==servideId)
  }

  fetchProductList(){
    return this.productList;
  }

  fetchSurvaytype(){
    return this.typeOfSurvay;
  }

  fetchProjectList(){
    return this.projectList;
  }

  fetchHelpList(){
    return this.helpList;
  }


  sendActiveRequest(serviceId:string,userEmail:string){
    let reqUrl=`${this.baseUrl}/service/active?serviceId=${serviceId}&email=${userEmail}`;
    return this.http.post(reqUrl,{})
  }

  sendDeactiveRequest(serviceId:string){
    let reqUrl=`${this.baseUrl}/service/deactive/${serviceId}`;
    return this.http.post(reqUrl,{})
  }

  fetchServiceDetail(serviceId:any){
    let reqUrl=`${this.baseUrl}/service/${serviceId}`;
    return this.http.get(reqUrl);
  }



  fetchAllRequestedService(){
    let reqUrl=`${this.baseUrl}/requested-service/all-requested-service`;
    return this.http.get(reqUrl);
  }

  approveRequestedService(userId:number,serviceId:number){
    let reqUrl=`${this.baseUrl}/service/approval?userId=${userId}&serviceId=${serviceId}`;
    (reqUrl);
    
    return this.http.post(reqUrl,{});
  }

}
