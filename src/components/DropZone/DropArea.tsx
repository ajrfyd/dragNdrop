import React from "react";
import styled from "styled-components";

type DropAreaProps = {
  title: string;
}

const DropArea = ({ title }: DropAreaProps) => {
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('target');
    console.log(data);
    e.currentTarget.appendChild(document.getElementById(data) as HTMLElement);
  }
  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }

  return (
    <StatusContainer onDrop={onDrop} onDragOver={dragOver}>
      <h1>{title}</h1>
    </StatusContainer>
  )
}

export default DropArea;

const StatusContainer = styled.div`
  width: 25%;
  position: relative;
  background-color: #eee;
  border-radius: 10px;
  padding: 50px 1rem;
  text-align: center;
  overflow: auto;

  &:nth-child(even) {
    background-color: #ddd;
  }

  h1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #343434;
    color: #fff;
    text-align: center;
    margin: 0;
    padding: .4rem 0;
    font-size: 1.7rem;
  }
`