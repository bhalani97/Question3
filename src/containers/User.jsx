import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RenderUser from './RenderUser';
class User extends Component {
    constructor(){
        super()
        this.state={
            user : [
                {"cell": "9727376103",
                "city": "Surat",
                "dob": "1969-02-25",
                "email": "divyesh@gmail.com",
                "name": "Divyesh Bhalani",
                "zipcode": "560098"},
                {"cell": "0972737613",
                "city": "Surat",
                "dob": "2000-02-25",
                "email": "utkarsh@gmail.com",
                "name": "Utkarsh Bhalani",
                "zipcode": "364002"},
                {"cell": "4572737613",
                "city": "Surat",
                "dob": "1997-02-25",
                "email": "ankit@gmail.com",
                "name": "Ankit Bhalani",
                "zipcode": "364002"},
                {"cell": "8542737613",
                "city": "Surat",
                "dob": "1998-02-25",
                "email": "harsh@gmail.com",
                "name": "Harsh Bhalani",
                "zipcode": "364002"},
                {"cell": "7857585857",
                "city": "Surat",
                "dob": "1965-02-25",
                "email": "keval@gmail.com",
                "name": "keval Bhalani",
                "zipcode": "364002"},
                {"cell": "7857585858",
                "city": "Surat",
                "dob": "2000-02-25",
                "email": "divya@gmail.com",
                "name": "divya dutta",
                "zipcode": "364002"},

            ],
        }
        
    }


     componentDidMount(){
                          let users = [];
                          const allUserFromLocal = JSON.parse(
                            localStorage.getItem("users")
                          );
                          if (allUserFromLocal.length === 0) {
                            localStorage.setItem(
                              "users",
                              JSON.stringify(this.state.user)
                            );
                          }
                        }
    
    render() { 
      
        return (
            <div>
            <RenderUser user= {this.state.user}></RenderUser>
            
            </div>
         );
    }
}
 
export default User;
