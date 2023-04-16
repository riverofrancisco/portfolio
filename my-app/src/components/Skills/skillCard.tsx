import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Skill } from "../../data/data";

interface Props {
  skill: Skill;
}

interface AutoResizeTextProps {
  containerWidth: number;
  text: string;
}

function AutoResizeText(props: AutoResizeTextProps) {
  const [fontSize, setFontSize] = useState<number>(16); // tamaño de fuente inicial
  const { containerWidth, text } = props;

  useEffect(() => {
    const scaleFactor = 0.1; // factor de escala
    const maxWidth = containerWidth * 0.9; // ancho máximo de la caja
    const textWidth = getTextWidth(text, `${fontSize}px`); // ancho del texto actual

    // si el ancho del texto actual es mayor que el ancho máximo, reducir el tamaño de la fuente
    if (textWidth > maxWidth) {
      const newFontSize = fontSize - scaleFactor;
      setFontSize(newFontSize);
    }
  }, [containerWidth, fontSize, text]);

  return (
    <Typography variant="body1" style={{ fontSize: `${fontSize}px` }}>
      {text}
    </Typography>
  );
}

// función auxiliar para obtener el ancho de un texto en píxeles
function getTextWidth(text: string, font: string) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context!.font = font;
  const metrics = context!.measureText(text);
  return metrics.width;
}

const Card = ({ skill }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
      borderRadius="15%"
      margin={1.5}
      borderTop={1}
      borderBottom={1}
      borderColor="white"
      p={1}
      boxShadow={2}
      sx={{
        width: { xs: "35%", sm: "23%", md: "15%" },
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          boxShadow: 3,
          transform: "scale(1.05)",
          transitionDelay: "0.05s",
        },
      }}
    >
      <Box
        width="100%"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AutoResizeText containerWidth={150} text={skill.name} />
      </Box>
      <img
        width="100%"
        style={{ borderRadius: "15%" }}
        src={skill.image}
        alt={skill.name}
      />
    </Box>
  );
};

export default Card;
