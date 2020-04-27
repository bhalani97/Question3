import React, { Component } from 'react';

class Register extends Component {
    constructor(){
        super()
        this.state={  
            name:'',
            cell:'',
            dob:'',
            city:'',
            zipcode:'',
            msg:'',
            email:'',
            validate:true
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.validate = this.validate.bind(this)
        this.seeUsers = this.seeUsers.bind(this)
    }
    

    handleChange(event){
        
        this.setState (
            {
                [event.target.name] : event.target.value
            }
        )
        
    }
    seeUsers(){
        const {name,cell,dob,city,zipcode,msg,email} = this.state
        const user = {"name":name,"cell":cell,"dob":dob,"city":city,"zipcode":zipcode,"email":email}
        this.props.history.push( {pathname: '/user'})
    }
    validate(){
       
        const {name,cell,dob,city,zipcode,msg,email} = this.state
        var nameVal = /^[A-Za-z ]+$/;
        this.setState({
            msg:''
        })
        
        const allUserFromLocal = JSON.parse(localStorage.getItem("users"))
        if(allUserFromLocal!=null){
            let i=0;
            for(i=0;i<allUserFromLocal.length;i++){
               if(allUserFromLocal[i].email==this.state.email){
                this.setState({
                    msg:'Please try with different email id already registered',
                    validate:false
                }) 
                return ;
               }
            }
        }
        if(!name.match(nameVal)){
            this.setState({
                msg:'Please Enter Only Alphabets in Name ',
                validate:false
            }) 
            return ;
        }
        if(cell.length!=10){
            this.setState({
                msg:'Only 10 Digits For Cell ',
                validate:false
            }) 
            return ;
        }
        if(cell.length!=10){
            this.setState({
                msg:'Only 10 Digits For Cell ',
                validate:false
            }) 
            return ;
        }

        if(city===""){
            this.setState({
                msg:'Please Select City ',
                validate:false
            }) 
            return ;
        }

        if(zipcode.length!=6){
            this.setState({
                msg:'Only 6 Digits are Allowed ',
                validate:false
            }) 
            return ;
        }
      


        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if(age<18){
            this.setState({
                msg:'Sorry You are not eligible as your age is below 18',
                validate:false
            }) 
            return ;
        }
        
       
    
        
            const user = {"name":name,"cell":cell,"dob":dob,"city":city,"zipcode":zipcode,"email":email}
            localStorage.setItem('user', JSON.stringify(user))
            this.props.history.push( {pathname: '/user'})
            
        
    }
    render() { 
        return (
          <div>
            <form name="register" method="post" className="m-5">
              {this.state.msg != null && <span>{this.state.msg}</span>}
              <fieldset>
                Name :{" "}
                <input className="m-2"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                ></input>
                <br />
                Cell :{" "}
                <input className="m-2"
                  type="number"
                  name="cell"
                  value={this.state.cell}
                  onChange={this.handleChange}
                ></input>
                <br />
                DOB :{" "}
                <input className="m-2"
                  type="date"
                  name="dob"
                  value={this.state.dob}
                  onChange={this.handleChange}
                ></input>
                <br />
                Email :
                <input className="m-2"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                ></input>
                <br />
                City :
                <select onChange={this.handleChange} name="city"  className="m-2">
                <option disabled selected value=""> -- select an option -- </option>
                  <option value="Surat">Surat</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Rajkot">Rajkot</option>
                  <option value="Bangalore">Bangalore</option>
                </select>
                <br/>
                ZipCode :
                <input className="m-2"
                  type="number"
                  name="zipcode"
                  value={this.state.zipcode}
                  onChange={this.handleChange}
                ></input>
                <br />
                <button type="button" onClick={this.validate}>
                  Register
                </button>
              </fieldset>
            </form>
            <br/>
            <button onClick={this.seeUsers}>See Users</button>
          </div>
        );
    }
}
 
export default Register
;
