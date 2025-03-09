import React, { useState } from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  background-color: lightblue;
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CalculatorContainer = styled.div`
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

const NumbersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  color: #ff6600;
  font-size: calc(12px + 1vw);
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: calc(60px + 2vw);
  padding: 10px;
  font-size: calc(12px + 1vw);
  border: 2px solid #ff6600;
  margin-bottom: 15px;
  box-sizing: border-box;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #ff6600;
  color: white;
  font-size: calc(12px + 1vw);
  border: none;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
`;

const Output = styled.p<{ color: string }>`
  font-size: calc(12px + 1vw);
  color: ${(props) => props.color};
`;

export function Calculator() {
    const [color, setColor] = useState<string>("black");

    const addition = () => {
        let firstNumber = (document.getElementById("first-number") as HTMLInputElement).value;
        let secondNumber = (document.getElementById("second-number") as HTMLInputElement).value;
        let result = Number(firstNumber) + Number(secondNumber);

        let output = document.getElementById("output")!;
        output.innerHTML = String(result);

        setColor(result < 0 ? "red" : "black");
    };

    const subtraction = () => {
        let firstNumber = (document.getElementById("first-number") as HTMLInputElement).value;
        let secondNumber = (document.getElementById("second-number") as HTMLInputElement).value;
        let result = Number(firstNumber) - Number(secondNumber);

        let output = document.getElementById("output")!;
        output.innerHTML = String(result);

        setColor(result < 0 ? "red" : "black");
    };

    const multiplication = () => {
        let firstNumber = (document.getElementById("first-number") as HTMLInputElement).value;
        let secondNumber = (document.getElementById("second-number") as HTMLInputElement).value;
        let result = Number(firstNumber) * Number(secondNumber);

        let output = document.getElementById("output")!;
        output.innerHTML = String(result);

        setColor(result < 0 ? "red" : "black");
    };

    const division = () => {
        let firstNumber = (document.getElementById("first-number") as HTMLInputElement).value;
        let secondNumber = (document.getElementById("second-number") as HTMLInputElement).value;
        let result = Number(firstNumber) / Number(secondNumber);

        let output = document.getElementById("output")!;
        output.innerHTML = String(result);

        setColor(result < 0 ? "red" : "black");
    };

    const power = () => {
        let firstNumber = (document.getElementById("first-number") as HTMLInputElement).value;
        let secondNumber = (document.getElementById("second-number") as HTMLInputElement).value;

        let result = 1;
        for (let limit = 0; limit < Number(secondNumber); limit++) {
            result = Number(firstNumber) * result;
        }

        let output = document.getElementById("output")!;
        output.innerHTML = String(result);

        setColor(result < 0 ? "red" : "black");
    };

    const doClear = () => {
        let output = document.getElementById("output")!;
        let firstNumber = document.getElementById("first-number") as HTMLInputElement;
        let secondNumber = document.getElementById("second-number") as HTMLInputElement;

        output.innerHTML = "";
        firstNumber.value = "";
        secondNumber.value = "";
        setColor("black");
    };

    return (
        <PageWrapper>
            <CalculatorContainer>
                <NumbersContainer>
                    <Label htmlFor="first-number">First Number:</Label>
                    <Input type="text" id="first-number" />
                </NumbersContainer>
                <NumbersContainer>
                    <Label htmlFor="second-number">Second Number:</Label>
                    <Input type="text" id="second-number" />
                </NumbersContainer>
                <ButtonsContainer>
                    <Button onClick={addition}>+</Button>
                    <Button onClick={subtraction}>-</Button>
                    <Button onClick={multiplication}>*</Button>
                    <Button onClick={division}>/</Button>
                    <Button onClick={power}>**</Button>
                    <Button onClick={doClear}>Clear</Button>
                </ButtonsContainer>
                <Output id="output" color={color}></Output> {}
            </CalculatorContainer>
        </PageWrapper>
);
}