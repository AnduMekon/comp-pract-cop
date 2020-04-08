import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
class IndecisionApp extends React.Component {
    render() {
      const title = 'የምግብ ማኖ';
      const subtitle = 'የሚፈልጉትን አየነት ምግብ ይምረጡ!';
      const options = ['የመጀመሪያ ምርጫ', 'ሁለትኛ ምርጫ', 'ሶስተኛ ምርጫ'];
  
      return (
        <div>
          <Me />
          <Header title={title} subtitle={subtitle} />
          <Action />
          <Options options={options} />
          <AddOption />
          <Me />
          <MyForm />
          
        </div>
      );
    }
  }
  class MyForm extends React.Component {
    render() {
      return (
        <form>
          <h1>Hello</h1>
          <p>Enter your name:</p>
          <input style={{backgroundColor: "lightblue"}}
            type="text"
          />
        </form>
      );
    }
  }
  class Me extends React.Component {
    render() {
      return (
        <div>
          <h1> this is me</h1>
          <h1 style={{backgroundColor: "lightblue"}}>የምግብ ማኖ!</h1>
        </div>
      );
    }
  }
  class Header extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
        </div>
      );
    }
  }
  
  class Action extends React.Component {
  handlePick() {
    alert ('እውይ ተጫኖኝ');
  }
  
    render() {
      return (
        <div>
          <button onClick={this.handlePick}>የቱን መምረጥ ይፈልጋሉ? test</button>
        </div>
      );
    }
  }
  
  class Options extends React.Component {
    handleRemoveAll(){
      alert('እርግጠኛ ኖዎት ማጥፋት ይፈልጋሉ? ')
    }
    render() {
      return (
        <div>
        <button onClick={this.handleRemoveAll}>ለማጥፋት</button>
          {
            this.props.options.map((option) => <Option key={option} optionText={option} />)
          }
        </div>
      );
    }
  }
  
  class Option extends React.Component {
    render() {
      return (
        <div>
        *  {this.props.optionText}
        </div>
      );
    }
  }
  
  class AddOption extends React.Component {
    render() {
      return (
        <div>
          AddOption component here
        </div>
      );
    }
  }
  
  ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
  


