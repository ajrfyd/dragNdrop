import React from "react";
import styled from "styled-components";
import { MdDeleteForever } from 'react-icons/md';

type TodoProps = {
  todo: string;
  id: string;
}

type PosTypes = {
  posX: number;
  posY: number;
  originalX: number;
  originalY: number;
}

const Todo = ({ todo, id }: TodoProps) => {
  const pos: PosTypes = {
    posX: 0,
    posY: 0,
    originalX: 0,
    originalY: 0
  }

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
    // const img = new Image();
    // e.dataTransfer.setDragImage(img, 0, 0);
    // console.log(e.dataTransfer)
    // pos.posX = e.clientX;
    // pos.posY = e.clientY;

    // console.dir(e.currentTarget.offsetLeft)
    // pos.originalX = e.currentTarget.offsetLeft;
    // pos.originalY = e. currentTarget.offsetTop;

    // console.log('Drag start!', e)
    if(e.target instanceof Element) {
      e.dataTransfer.setData('target', e.target.id);
      console.log(e.dataTransfer.getData('target'));
    }
  }

  // const dragingHandler = (e: React.DragEvent<HTMLDivElement>) => {
  //   e.currentTarget.style.left = `${e.currentTarget.offsetLeft + e.clientX - pos.posX}px`;
  //   e.currentTarget.style.top = `${e.currentTarget.offsetTop + e.clientY - pos.posY}px`;
  //   pos.posY = e.clientY;
  //   pos.posX = e.clientX;
  // }
    
  // const dragEnterHandler = () => {
  //   console.log('Drag Entered');
  // }

  // const dragEndHandler = () => {
  //   console.log('Drag End!')
  // }

  // const dragLeaveHandler = () => {
  //   console.log('Drag Leave!')
  // }
  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }

  return (
    <Container 
      draggable
      onDragStart={dragStartHandler} 
      // onDrag={dragingHandler}
      // onDragEnter={dragEnterHandler}
      // onDragEnd={dragEndHandler}
      // onDragLeave={dragLeaveHandler}
      onDragOver={dragOver}
      id={id}
    >
      <h5>{todo}</h5>
      <span><MdDeleteForever/></span>
    </Container>
  )
}

export default Todo;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: .3rem .8rem;
  border-radius: 2px;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, .5);

  &:hover {
    transform: scale(1.1);
  }

  h5 {
    margin: .2rem 0;
  }
  span {
    cursor: pointer;
    color: red;
    margin-top: .1rem;
  }

  & + & {
    margin-top: .5rem;
  }
`