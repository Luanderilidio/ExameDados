import { Container, ContainerProps } from "@mui/material";
import React, { HTMLAttributes, ReactNode } from "react";
import { Header } from "../Header";

interface BaseProps extends HTMLAttributes<HTMLDivElement>, ContainerProps {
  children: ReactNode;
}

export const Base: React.FC<BaseProps> = ({ children, ...restProps }) => {
  return (
    <div {...restProps}>
      <Container disableGutters maxWidth="lg" className="w-full col-span-12 ">
        {children}
      </Container>
    </div>
  );
};
