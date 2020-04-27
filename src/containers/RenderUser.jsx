import React, { Component } from 'react';
class RenderUser extends Component {
    constructor(){
        super()
        this.state={
            user:[],
            currentUser:[]
        }
        this.searchByName = this.searchByName.bind(this)
        this.searchByCell = this.searchByCell.bind(this)
      
    }

    componentDidMount(){
        let users = []
        const allUserFromLocal = JSON.parse(localStorage.getItem("users"))
        const user = JSON.parse(localStorage.getItem("user"))
        if(allUserFromLocal!==null){
            let i=0;
            for(i=0;i<allUserFromLocal.length;i++){
              
                users.push({name:allUserFromLocal[i].name,city:allUserFromLocal[i].city,cell:allUserFromLocal[i].cell,dob:allUserFromLocal[i].dob,zipcode:allUserFromLocal[i].zipcode,email:allUserFromLocal[i].email})
           }
        }
        if(user!==null){
            users.push({name:user.name,city:user.city,cell:user.cell,dob:user.dob,zipcode:user.zipcode,email:user.email})
        }
        
        localStorage.removeItem('user')
      
        this.setState(
            {
                user:users,
                currentUser:users
            }
        )
        localStorage.setItem("users", JSON.stringify(users));
    }
    searchByName(event){
        
        const copy_User = [...this.state.user]
        let start = event.target.value
       const user = copy_User.filter(u=>{
           if(u.name.toLowerCase().startsWith(start.toLowerCase())){
               return u;
           }
       })
       this.setState(
           {
               currentUser:user
           }
       )
       
        
    }
    searchByCell(event){
        // console.log(event.target.value)
        // if(event.target.value===""){
        //     this.componentDidMount()
        // }
        const copy_User = [...this.state.user]
        
        let start = event.target.value
       const user = copy_User.filter(u=>{
           if(u.cell.toLowerCase().startsWith(start.toLowerCase())){
               return u;
           }
       })
       this.setState({
         currentUser: user,
       });
       
        
    }

    render() { 
        return ( 
             
            <div>
                
                <br/>
                <div className="container">
                Search By Name<input type="text" name="name" onChange={this.searchByName}></input><br/>
                Search By MobileNumber<input type="number" name="number" onChange={this.searchByCell} ></input><br/>
                </div>
                
                
               <h1>User</h1>
               
               <div className="container">
               <table className="table">
                   <thead>
                       <tr>
                       <th>Name</th>
                       <th>City</th>
                       <th>Cell</th>
                       <th>DOB</th>
                       <th>Email</th>
                       <th>ZipCode</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.currentUser.map(
                               (u,i) => 
                                <tr key={i}>
                                    <td>{u.name}</td>
                                    <td>{u.city}</td>
                                    <td>{u.cell}</td>
                                    <td>{u.dob}</td>
                                    <td>{u.email}</td>
                                    <td>{u.zipcode}</td>
                                    
                                </tr>
                           )
                       }
                      
                   </tbody>
               </table>
                      

               </div>
               
            </div>
         );
    }
}
 
export default RenderUser;
