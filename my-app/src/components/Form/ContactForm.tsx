import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface Contacts {
  name: string;
  lastName: string;
  mail: string;
  message: string;
}

export default function ContactForm() {
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const CONTENT: Contacts = {
    name: name,
    lastName: lastName,
    mail: mail,
    message: message,
  };

  const handleInputChangeName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setName(event.target.value);
  };

  const handleInputChangeLast = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLastName(event.target.value);
  };
  const handleInputChangeMail = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(CONTENT);
    setMail(event.target.value);
  };
  const handleInputChangeMessage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMessage(event.target.value);
  };

  return (
    <Grid container id="Contact">
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        pt={2}
      >
        <Typography variant="h5" sx={{ textAlign: "center" }}>
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
        <Box my={5} maxWidth="90%" display="flex" flexDirection="column">
          <Box display="flex" justifyContent="space-between" width="100%">
            <TextField
              required
              id="outlined-required"
              label="Name"
              sx={{ my: 1, width: "48%" }}
              value={name}
              onChange={handleInputChangeName}
            />
            <TextField
              required
              id="outlined-required"
              label="LastName"
              sx={{ my: 1, width: "48%" }}
              value={lastName}
              onChange={handleInputChangeLast}
            />
          </Box>
          <TextField
            required
            id="outlined-required"
            label="Mail"
            sx={{ my: 1 }}
            value={mail}
            onChange={handleInputChangeMail}
          />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={8}
            sx={{ my: 1, width: "100%" }}
            value={message}
            onChange={handleInputChangeMessage}
          />

          <Button
            variant="contained"
            color="secondary"
            endIcon={<SendIcon />}
            sx={{ my: 1, width: "50%", alignSelf: "center" }}
          >
            <Typography variant="button"> Send Mesagge</Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
