import React from 'react';
class NameForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: '' , nameAvailable:false , isValid:props.isValid};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        event.preventDefault();
      //  alert('Greetings, '  + this.state.value + '!');
        if(!/[^a-zA-Z]/.test(this.state.value)) {
        this.setState({nameAvailable:true})
        }
        else{
          this.setState({isValid:false})
          this.setState({nameAvailable:true})
        }
      }

      render() {
        let returnArray = []
        const isValid = this.state.isValid
        if(!this.state.nameAvailable) {
          returnArray.push(
            <form onSubmit={this.handleSubmit} key="main">
              <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>);
            return returnArray;
          }
          if (isValid) {
           return (<div>Please enter valid characters.</div>);
         }
         return (<div>Greetings, {this.state.value}!</div>);
        }

        //    this.setState({nameAvailable:false})
        //    this.setState({isValid:false})
          // {(<div>Greetings, !</div>)}
      //  }if(this.state.isValid) {
      //    this.isValid:false
    //    return
//(<div>The user is <b>{isValid ? 'currently' : 'not'}</b> logged in.</div>)

      }

 export default NameForm;
