import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Cards({
  handleChange,
  card,
  cardsDetails,
  handleRemoveCard,
}) {
  return (
    <Box>
      <Grid
        sx={{ alignItems: "center" }}
        container
        spacing={{ xs: 3, sm: 3, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {cardsDetails.map((c, index) => (
          <Grid
            sx={{ cursor: "pointer" }}
            xs={9}
            sm={4}
            md={6}
            key={index}
            onClick={() => handleChange(c.id)}
          >
            <Item>
              <Box>
                <h2>{c.id === card ? c.answer : c.question}</h2>
                <button
                  style={{ backgroundColor: "white", color: "black" }}
                  onClick={() => handleRemoveCard(c)}
                >
                  ❌
                </button>
              </Box>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
