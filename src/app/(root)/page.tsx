"use client"
import { Button } from "@mui/material";
import styled from "styled-components";
import { Main } from "../../../public/styles/RootStyle";
export default function Home() {
  return (
    <Main className="tw-text-green-600">
         <h1>Hello</h1>
         <Button variant="outlined">Outlined</Button>
    </Main>
  );
}
