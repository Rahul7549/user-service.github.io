import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ServiceOperationService {
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
  constructor() { }

  fetchServiceList(){
    return this.serviceList;
  }
  

  fetchServiceById(servideId:number){
    return this.serviceList.find(service=> service.id==servideId)
  }

}
