import { Box, TextField, Button, Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import { useTodos } from "../store/store";

export default function InputTask() {
  const [values, setValue] = useState<String>("");
  const addTodos = useTodos((state) => state.addNewTodos);
  const handleInput = (e: any) => {
    setValue(e.target.value);
  };

  const handleAddTodos = () => {
    if (!values) return;
    addTodos(values);
    setValue("");
  };
  return (
    <Card
      variant='elevation'
      style={{
        margin: "20px 0px",
        position: "sticky",
        top: "0",
        zIndex: "9999",
      }}
    >
      <CardContent>
        <Box
          sx={{ display: "flex" }}
          alignItems={"center"}
          justifyItems={"center"}
        >
          <TextField
            label='Add task'
            value={values}
            variant='standard'
            fullWidth
            onChange={(e: any) => handleInput(e)}
          />
          <Button
            disableElevation
            variant='contained'
            sx={{ marginLeft: "25px" }}
            onClick={() => handleAddTodos()}
          >
            Add
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
