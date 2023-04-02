import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
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

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (!form.current) {
      return;
    }

    emailjs
      .sendForm(`${serviceID}`, `${templateID}`, form.current, publicKey)
      .then(
        (response: EmailJSResponseStatus) => {
          alert("Email sent successfully!");
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
    <Grid container id="Contact" key="contact-form">
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={10}
        py={2}
      >
        <Typography variant="h3" sx={{ textAlign: "center" }}>
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
        <form ref={form} onSubmit={handleSubmit}>
          <Box my={5} maxWidth="90%" display="flex" flexDirection="column">
            <Box display="flex" justifyContent="space-between" width="100%">
              <TextField
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
              sx={{ my: 1, width: "50%", alignSelf: "center" }}
            >
              <Typography variant="button"> Send Mesagge</Typography>
            </Button>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
}
