
import React, { Component } from 'react';


class Form extends Component {
    state = {  }
    youdidit() {
        alert('Thank you, we will contact you shortly!')
    }
    render() { 
        return ( <div className="formpage">
            <div id="form-main">
      <div id="form-div">
        <form className="form" id="form1">
          
          <p className="name"> <h3 className="formtext">Your name</h3>
            <input name="name" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
          </p>
          
          <p className="email"><h3 className="formtext">Your Product</h3>
            <input name="email" type="text" className="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
          </p>
          
          <p className="text"><h3 className="formtext">Additonal Details</h3>
            <textarea name="text" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Comment"></textarea>
          </p>
          
          
          <div className="submit">
            <input type="submit" value="SEND" id="button-blue" onClick={this.youdidit}  />
            <div className="ease"></div>
          </div>
        </form>
      </div>
      </div>
        </div> );
    }
}
 
export default Form;