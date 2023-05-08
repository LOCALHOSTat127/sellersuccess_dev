import { useState } from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import { ReactComponent as MailboxSvg } from "../../assets/svg/mail_box.svg";
import { ReactComponent as Arrow } from "../../assets/svg/rightarrow.svg";
import CircularProgress from "@mui/material/CircularProgress";
import emailjs from "emailjs-com";
import isEmail from "validator/lib/isEmail";
const FooterContact = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [emailID, setEmailID] = useState(null);
  const [isSending, setSending] = useState(false);
  const [isError, setError] = useState({
    isError: false,
    isSuccess: false,
    error_msg: "",
  });

  const checkForError = () => {
    if (firstName === null) {
      return true;
    } else if (lastName === null) {
      return true;
    } else if (isEmail(emailID) === false) {
      return true;
    }

    return false;
  };

  const sendMail = async () => {
    setError({
      isError: false,
      isSuccess: false,
      error_msg: "",
    });

    if (checkForError() === false) {
      setSending(true);
      let response = await emailjs.send(
        "SELLERSUCCESS_EMAIL",
        "template_phafj3x",
        {
          client_name: `${firstName} ${lastName}`,
          first_name: firstName,
          last_name: lastName,
          phone: phone,
          reply_to: process.env.REACT_APP_SERVICE_EMAIL,
          email: emailID,
        },
        process.env.REACT_APP_SMTP_USER_ID
      );
      setSending(false);

      if (response.status === 200) {
        console.log(document.getElementById("first_name"));
        document.getElementById("first_name").value = "";
        document.getElementById("last_name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        setFirstName(null);
        setLastName(null);
        setPhone(null);
        setEmailID(null);
        setError({
          isError: true,
          isSuccess: true,
          error_msg: "Email Sent : Our Team Member will Contact your soon.",
        });
      } else {
        setError({
          isError: true,
          isSuccess: false,
          error_msg: "Error : Please Try Again Later.",
        });
      }
    }
  };

  return (
    <section id="contact" className="footer_contact">
      <div className="inner_right">
        <div className="headone">
          <h4>Let's talk about your business</h4>
          <p>we are more than happy to help you.</p>
        </div>

        <div className="contact_controlls">
          <div className="upper_input">
            <TextField
              disabled={isSending === true ? true : false}
              onChange={(e) => setFirstName(e.target.value)}
              id="first_name"
              label="First Name"
              variant="outlined"
            />
            <TextField
              disabled={isSending === true ? true : false}
              onChange={(e) => setLastName(e.target.value)}
              id="last_name"
              label="Last Name"
              variant="outlined"
            />
          </div>

          <div className="lower_input">
            <TextField
              disabled={isSending === true ? true : false}
              onChange={(e) => setPhone(e.target.value)}
              id="phone"
              label="Phone"
              variant="outlined"
            />
            <TextField
              disabled={isSending === true ? true : false}
              onChange={(e) => setEmailID(e.target.value)}
              id="email"
              label="Email ID"
              variant="outlined"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            className="bottm"
          >
            <button
              disabled={isSending === true ? true : false}
              onClick={sendMail}
              id="sendmail"
              className="sendmail"
            >
              Send Message
              {isSending === true ? (
                <CircularProgress size={20} />
              ) : (
                <Arrow className="sm_svg" />
              )}
            </button>
            {isError.isError && (
              <p
                style={{
                  fontWeight: "600",
                  color: `${isError.isSuccess === true ? "green" : "red"}`,
                  fontSize : "14px"
                }}
                className="error_str"
              >
                {isError.error_msg}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="inner_left">
        <MailboxSvg className="sm_svg" />
      </div>
    </section>
  );
};

export default FooterContact;
