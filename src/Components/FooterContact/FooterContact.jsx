import React from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import { ReactComponent as MailboxSvg } from "../../assets/svg/mail_box.svg";
import { ReactComponent as Arrow } from "../../assets/svg/rightarrow.svg";

const FooterContact = () => {
  return (
    <section className="footer_contact">
      <div className="inner_right">
        <div className="headone">
          <h4>Let's talk about your business</h4>
          <p>we are more than happy to help you.</p>
        </div>

        <div className="contact_controlls">
          <div className="upper_input">
            <TextField id="first_name" label="First Name" variant="outlined" />
            <TextField id="last_name" label="Last Name" variant="outlined" />
          </div>

          <div className="lower_input">
            <TextField id="phone" label="Phone" variant="outlined" />
            <TextField id="email" label="Email ID" variant="outlined" />
          </div>

          <button id="sendmail" className="sendmail">
            Send Message
            <Arrow className="sm_svg" />
          </button>
        </div>
      </div>
      <div className="inner_left">
        <MailboxSvg className="sm_svg" />
      </div>
    </section>
  );
};

export default FooterContact;
