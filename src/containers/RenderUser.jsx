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
        this.setState(
            {
                user:this.props.user,
                currentUser:this.props.user
            }
        )
    }
    searchByName(event){
        // console.log(event.target.value)
        // if(event.target.value===""){
        //     this.componentDidMount()
        // }
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
       console.log(this.state.currentUser)
        
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
       this.setState(
           {
               currentUser:user
           }
       )
       console.log(this.state.currentUser)
        
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
