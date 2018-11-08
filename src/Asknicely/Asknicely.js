import React, { Component } from "react";

class Asknicely extends Component {

  	constructor() {
    	super();
    	this.asknicelySettingsShow =this.asknicelySettingsShow.bind(this)
  	}

	asknicelySettingsShow()  {
		window.asknicelySettings.show({
			name: "Nassau IT", // Optional - but nice to have
			email: "us-nassauit@essaaaaaaaaaaaaaaailorusa.com", // Required - if no email, this should be a unique id for this customer in an email-like format. But a real email address is more powerful for follow-ups
			email_hash:
			"876cd078bd321b9f59c43aae1c8f5d362f4433d1292ad1bb5bcd0c2aab7b9abb", // Required - *security hash of this customers email - see below
			a_custom_property: "business", // Optional - Send extra data about this customer for reporting and leaderboards
			created: 1540831858, // Highly desired - unix timestamp when this customer joined your service.
			another_custom_property: "New York" // Optional - Send extra data about this customer for reporting and leaderboards
		});
	}

	render() {
		const style = {
		  border: "1px solid #2489DA",
		  color: "#FFFFFF",
		  backgroundColor: "#2B9BF4",
		  padding: "0 16px 0 14px",
		  fontSize: "14px !important",
		  fontWeight: 500,
		  lineHeight: "32px",
		  height: "32px",
		  borderRadius: "5px",
		  cursor: "pointer"
		};
		return (
		  <div id="asknicely">
			<button
			 style={style}
			  onClick={this.asknicelySettingsShow}
			>
			  Show Survey
			</button>
		  </div>
		);
	}
}

export default Asknicely;
