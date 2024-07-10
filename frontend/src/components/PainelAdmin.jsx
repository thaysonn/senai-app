import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Modal,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import inscricaoService from "../services/inscricaoService";
import { useFormik } from "formik";
import * as Yup from "yup";

const PainelAdmin = ({ setShowAdmin }) => {
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

  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editItemId, setEditItemId] = useState(null); // Track the ID of the item being edited

  const [newItem, setNewItem] = useState({
    cpf: "",
    nome: "",
    email: "",
    telefone: "",
    especializacao: "",
    casa: "",
    data: new Date(),
  });

  const validationSchema = Yup.object({
    cpf: Yup.string()
      .required("CPF é obrigatório")
      .matches(/^\d{11}$/, "CPF deve ter 11 dígitos"),
    nome: Yup.string()
      .required("Nome completo é obrigatório")
      .max(100, "Nome completo deve ter no máximo 100 caracteres"),
    email: Yup.string()
      .email("E-mail inválido")
      .max(100, "Email deve ter no máximo 100 caracteres")
      .required("E-mail é obrigatório"),
    telefone: Yup.string()
      .max(100, "Telefone deve ter no máximo 20 caracteres")
      .required("Celular é obrigatório"),
    especializacao: Yup.string()
      .max(100, "Especialização deve ter no máximo 100 caracteres")
      .required("Especialização é obrigatória"),
    casa: Yup.string()
      .max(100, "Casa deve ter no máximo 50 caracteres")
      .required("Casa é obrigatória"),
  });

  const formik = useFormik({
    initialValues: {
      cpf: "",
      nome: "",
      email: "",
      telefone: "",
      especializacao: "",
      casa: "",
      data: new Date(),
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      await inscricaoService.createInscricao(values);
      resetForm();
      handleClose();
      fetchData();
    },
  });
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await inscricaoService.getAllInscricoes(); 
    setData(res.data);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  const handleEdit = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    formik.setValues(itemToEdit);
    setIsEditing(true);
    setEditItemId(id);
    handleOpen();
  };

  const handleRemove = async (id) => {
    await inscricaoService.deleteInscricao(id);
    fetchData();
  };

  const handleLogoff = async () => {
    setShowAdmin(false);
  };

  return (
    <div className="paineladmin">
      <div className="headeradmin">
        <div className="vetor"></div>
        <span>Painel do ADM</span>
        <i onClick={handleLogoff}>Fazer Logoff</i>
      </div>
      <div className="relatorio">
        <div className="relatorioheader">
          <span>Relatório de Inscrições</span>

          <Button
            variant="contained"
            className="btnadd"
            color="primary"
            onClick={handleOpen}
          >
            ADICIONAR UMA INSCRIÇÃO
          </Button>
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Data</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Casa</TableCell>
                <TableCell>Especialização</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell>Telefone</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.data}</TableCell>
                  <TableCell>{item.nome}</TableCell>
                  <TableCell>{item.casa}</TableCell>
                  <TableCell>{item.especializacao}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.telefone}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginRight: 8 }}
                      onClick={() => handleEdit(item.id)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remover
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <div className="headerlogin">
              <div className="logo"></div>
              <Typography variant="h6" component="h2" gutterBottom>
                Formulário de Inscrição de Voluntário na Campanha MS Pela Vida
              </Typography>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                name="cpf"
                placeholder="000.000.000-00"
                value={formik.values.cpf}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                helperText={formik.touched.cpf && formik.errors.cpf}
                fullWidth
                margin="normal"
              />

              <TextField
                name="nome"
                placeholder="Informe seu nome"
                value={formik.values.nome}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.nome && Boolean(formik.errors.nome)}
                helperText={formik.touched.nome && formik.errors.nome}
                fullWidth
                margin="normal"
              />

              <TextField
                name="email"
                placeholder="Informe seu email institucional"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                fullWidth
                margin="normal"
              />

              <TextField
                name="telefone"
                placeholder="(67) 999999-9999"
                value={formik.values.telefone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.telefone && Boolean(formik.errors.telefone)
                }
                helperText={formik.touched.telefone && formik.errors.telefone}
                fullWidth
                margin="normal"
              />

              <TextField
                name="especializacao"
                placeholder="Informe a especialização"
                value={formik.values.especializacao}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.especializacao &&
                  Boolean(formik.errors.especializacao)
                }
                helperText={
                  formik.touched.especializacao && formik.errors.especializacao
                }
                fullWidth
                margin="normal"
              />

              <TextField
                name="casa"
                placeholder="Informe a casa"
                value={formik.values.casa}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.casa && Boolean(formik.errors.casa)}
                helperText={formik.touched.casa && formik.errors.casa}
                fullWidth
                margin="normal"
              />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ marginTop: 16 }}
                fullWidth={true}
              >
                Realizar Inscrição
              </Button>
            </form>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default PainelAdmin;
