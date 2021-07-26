import React from 'react'
class Child extends React.Component{
	
	onTrigger = (event) => {
		this.props.parentCallback(event.target.ashish.value);
		event.preventDefault();
	}

	render(){
		return(
		<div>
			<form onSubmit = {this.onTrigger}>
				{/* <input type = "text"
				name = "myname" placeholder = "Enter Name" onChange={(e)=>this.onTrigger(e)} />
				<br></br><br></br> */}
                <input type ="text" name ="ashish" placeholder ="enter something"/>
                <br></br>
                <br></br>
				{/* <input type = "submit" value = "Submit"/> */}
                <button>Submit</button>
				<br></br><br></br>
			</form>
		</div>
		)
	}
}
export default Child
