import React, { Component } from 'react';
import './index.less';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {emailIsValid: true};
    this.submitClicked = this.submitClicked.bind(this);
  }

  submitClicked(e) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = this.emailInput.value;
    const valid = (email != null && email.length <= 254 && re.test(email));

    this.setState({emailIsValid: valid});

    if (!valid) {
      e.preventDefault();
    }
  }

  render() {
    return (
      <div className="contact_form">
        <form action="https://ideo.us2.list-manage.com/subscribe/post" method="POST">
          <input type="hidden" name="u" value="177d391697939b9281ab317e0" />
          <input type="hidden" name="id" value="7b8428b00a" />

          <div className="email-wrapper">
            <input className={this.state.emailIsValid ? "" : "invalid"} ref={(input) => { this.emailInput = input; }} type="email" placeholder="Email" autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0" size="25" />
            <div className="email-validation-warning">Please enter a valid email address</div>
          </div>

          <select className="select-small" id="MERGE1" name="MERGE1">
            <option value="I am a service provider">I am a service provider</option>
            <option value="I am a network">I am a network</option>
            <option value="I am a developer">I am a developer</option>
            <option value="I am a funder">I am a funder</option>
            <option value="Other">Other</option>
          </select>

          <input type="submit" className="button" name="submit" value="Apply" onClick={this.submitClicked} />

          <input type="hidden" name="ht" value="b6c5a22c9f143f12665a61eacd85f3a03d95f775:MTUwMzYwNjA1NS4xMjM4" />
          <input type="hidden" name="mc_signupsource" value="hosted" />
        </form>
      </div>
    );
  }
}

export default ContactForm;

ContactForm.displayName = 'ContactForm';
