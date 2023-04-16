import { Container, Typography } from "@mui/material";
import Task from "../../components/Task";
import InputTask from "../../components/InputTask";

export default function Todo() {
  return (
    <Container maxWidth='sm' style={{ marginTop: "50px" }}>
      <Typography variant='h4' component='h2' textAlign={"center"}>
        Todo App
      </Typography>
      <InputTask />
      <Task />
    </Container>
  );
}
