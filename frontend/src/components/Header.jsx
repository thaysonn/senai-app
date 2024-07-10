import { Button, Modal, Box, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const Header = ({ setShowAdmin, showAdmin }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (!showAdmin) {
      setOpen(true);
    } else {
      setShowAdmin(false);
    }
  };
  const handleClose = () => setOpen(false);

  const handleLogin = async () => {
    setShowAdmin(true);
    setOpen(false);
  };

  return (
    <header>
      <div className="header">
        <div className="logoContainer">
          <div className="logo"></div>
        </div>
        <div className="versao">
          <i>Clique para visualizar a versão Web.</i>
        </div>
      </div>
      <div className="navbar">
        <Button variant="contained" color="primary" style={{ width: "235px" }} >
          Sobre o Projeto
        </Button>
        <Button variant="contained" color="primary" style={{ width: "235px" }}>
          Inscrições
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ width: "235px" }}
          onClick={handleOpen}
        >
          {showAdmin ? "Fazer logoff" : "Painel Admin"}
        </Button>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="headerlogin">
            <div className="logo"></div>
            <Typography variant="h6" component="h2" gutterBottom>
              Fazer Login como Administrador
            </Typography>
          </div>

          <TextField label="CPF" name="cpf" fullWidth margin="normal" />
          <TextField label="Senha" name="senha" fullWidth margin="normal" />
          <Button
            variant="contained"
            color="primary"
            fullWidth={true}
            onClick={handleLogin}
            style={{ marginTop: 16 }}
          >
            Fazer Login
          </Button>
        </Box>
      </Modal>
    </header>
  );
};

export default Header;
