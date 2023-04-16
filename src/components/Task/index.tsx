import * as Material from "react-icons/md";
import {
  Card,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";
import React from "react";
import CardContent from "@mui/material/CardContent";
import { useTodos } from "../../store/store";
import "./task.css";

export default function Task() {
  const todo = useTodos((state) => state.todos);
  const completeTodo = useTodos((state) => state.completedTodos);
  const removeTodo = useTodos((state) => state.removeTodo);

  const handleCompleted = (e: any, id: String) => {
    completeTodo(id, e.target.checked);
  };
  return (
    <>
      <Card>
        <CardContent>
          {todo?.length === 0 ? (
            <>
              <Typography variant='h5' textAlign={"center"}>
                No task today
              </Typography>
            </>
          ) : (
            <List>
              {todo?.map((item, i) => (
                <React.Fragment key={i}>
                  <ListItem
                    secondaryAction={
                      <>
                        <IconButton
                          aria-label='delete'
                          size='small'
                          onClick={() => removeTodo(item.id)}
                        >
                          <Material.MdDelete size={"25px"} color='red' />
                        </IconButton>
                        <Checkbox
                          checked={item.isCompleted}
                          onChange={(e) => handleCompleted(e, item.id)}
                        />
                      </>
                    }
                  >
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          variant='body2'
                          className={`${item.isCompleted && "completedTask"}`}
                        >
                          {item.title}
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          )}
        </CardContent>
      </Card>
    </>
  );
}
