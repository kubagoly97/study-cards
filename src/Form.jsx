import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form({ addQuestionAndAnswer, cardsDetails }) {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <Card sx={{ flexGrow: 1, textAlign: "center", backgroundColor: "white" }}>
      <form
        onSubmit={handleSubmit((data) => {
          setData(JSON.stringify(data));
          addQuestionAndAnswer(data);
        })}
      >
        <h1>Flash-cards</h1>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Question:
          </Typography>
          <input
            style={{
              backgroundColor: "grey",
              border: "none",
              borderRadius: "3px",
              height: "30px",
            }}
            type="text"
            {...register("question", { required: true })}
          />
          <Typography gutterBottom variant="h6" component="div">
            Answer:
          </Typography>
          <input
            style={{
              backgroundColor: "grey",
              border: "none",
              borderRadius: "3px",
              height: "30px",
            }}
            type="text"
            {...register("answer", { required: true })}
          />
        </CardContent>
        <CardActions>
          <button style={{ backgroundColor: "white", color: "black" }}>
            Add question on the list
          </button>
        </CardActions>
      </form>
    </Card>
  );
}
