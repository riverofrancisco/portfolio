import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button, Fade, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import Alert from "@mui/material/Alert";

const { publicKey, templateID, serviceID } = process.env;

export interface Contacts {
  name: string;
  lastName: string;
  mail: string;
  message: string;
}

export default function ContactForm() {
  emailjs.init(`${publicKey}`);

  //// INPUTS
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const CONTENT: Contacts = {
    name: name,
    lastName: lastName,
    mail: email,
    message: message,
  };

  //// VALIDATIONS
  //EMAIL
  const [validEmail, setValidEmail] = useState(true);
  const regexWhite = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );
  function validateEmail() {
    if (regexWhite.test(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  //BUTTON
  const [submiteable, setSubmiteable] = useState(false);

  function isSubmiteable() {
    if (!name) {
      setSubmiteable(false);
    } else if (!lastName) {
      setSubmiteable(false);
    } else if (!email || !validEmail) {
      setSubmiteable(false);
    } else if (!message) {
      setSubmiteable(false);
    } else {
      setSubmiteable(true);
    }
  }

  useEffect(() => {
    isSubmiteable();
  });

  ////ALERT
  const [showAlert, setShowAlert] = useState(false);

  ////SUBMIT
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current) {
      return;
    }

    console.log(`serviceID: ${serviceID}`);
    console.log(`template: ${templateID}`);
    console.log(`${form.current}`);
    console.log(`${publicKey}`);

    emailjs
      .sendForm(
        `service_portfolio`,
        `template_7omt3ti`,
        form.current,
        "K2SVcEaEn3fPaafzK"
      )
      .then(
        (response: EmailJSResponseStatus) => {
          alert("Email sent successfully!");
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
          setName("");
          setLastName("");
          setEmail("");
          setMessage("");
        },
        (error: EmailJSResponseStatus) => {
          alert("Error sending email:, " + error);
        }
      );
  };

  return (
    <Grid
      container
      xs={12}
      id="Contact"
      key="contact-form"
      height="100%"
      py={2}
    >
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: { xs: 2, md: 4 } }}
      >
        <Typography
          variant="h3"
          sx={{ textAlign: "center" }}
          fontWeight="bolder"
          style={{
            textShadow:
              "2px 2px 0px rgba(255, 255, 255, 0.5), 4px 4px 2px rgba(0, 0, 0, 0.15)",
          }}
        >
          Contact Me
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box my={3} maxWidth="90%" display="flex" flexDirection="column">
          <form ref={form} onSubmit={handleSubmit}>
            <Box maxWidth="100%" display="flex" flexDirection="column">
              <Box display="flex" justifyContent="space-between" width="100%">
                <TextField
                  name="from_name"
                  required
                  id="name"
                  label="Name"
                  variant="outlined"
                  sx={{ my: 1, width: "48%" }}
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                />
                <TextField
                  name="last_name"
                  required
                  id="lastName"
                  label="Last Name"
                  variant="outlined"
                  sx={{ my: 1, width: "48%" }}
                  value={lastName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setLastName(e.target.value)
                  }
                />
              </Box>
              <TextField
                name="email"
                required
                error={!validEmail}
                helperText={!validEmail && "Please enter a valid email"}
                onBlur={validateEmail}
                id="email"
                label="Email"
                variant="outlined"
                sx={{ my: 1 }}
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <TextField
                name="message"
                required
                id="message"
                label="Message"
                variant="outlined"
                multiline
                rows={8}
                sx={{ my: 1, width: "100%" }}
                value={message}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setMessage(e.target.value)
                }
              />

              <Button
                type="submit"
                variant="contained"
                color="secondary"
                endIcon={<SendIcon />}
                disabled={!submiteable}
                sx={{ my: 1, width: "50%", alignSelf: "center" }}
              >
                <Typography variant="button"> Send Mesagge</Typography>
              </Button>
              <Fade in={showAlert}>
                <Alert severity="success">Email sent successfully!</Alert>
              </Fade>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}
