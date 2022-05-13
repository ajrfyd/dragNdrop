import React, { useState } from 'react';
import styled from 'styled-components';
import Todo from './components/Todo/Todo';
import DropArea from './components/DropZone/DropArea';

type TodoType = {
  id: number;
  text: string;
}

const dropArea = [
  { title: 'Not Started', },
  { title: 'In Progress', },
  { title: 'Completed' }
]

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  return (
    <Container >
      <TitleContainer>
        <h1>Drag for Todo</h1>
      </TitleContainer>
      <TodoContainer>
        <StatusContainer>
          <h1>No Status</h1>
          <Btn>Add Todo</Btn>
          <Todo todo='Halil' id='1'/>
          <Todo todo='Halil2'id='2'/>
          <Todo todo='Halil3'id='3'/>
        </StatusContainer>
        {/* <StatusContainer onDrop={onDrop} onDragOver={dropOver}>
          <h1>Not Started</h1>
        </StatusContainer>
        <StatusContainer id='ip'>
          <h1>In Progress</h1>
        </StatusContainer>
        <StatusContainer id='cp'>
          <h1>Completed</h1>
        </StatusContainer> */}
        {
          dropArea.map(zone => <DropArea title={zone.title} key={zone.title} />)
        }
      </TodoContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
`

const TitleContainer = styled.div`
  h1 {
    margin-top: 0;
  }
`

const TodoContainer = styled.div`
  width: 70%;
  height: 75vh;
  display: flex;
`

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

const Btn = styled.button`
  margin: .3rem 0;
  width: 80%;
  outline: none;
  border: none;
  background-color: pink;
  padding: .3rem 0;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #6200ee;
  box-shadow: 0 0 1px rgba(0, 0, 0, .6);

  &:hover {
    background-color: #e77688;
  }
  &:active {
    transform: scale(1.1);
  }
`