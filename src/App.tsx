import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <Container >
      <TitleContainer>
        <h1>Drag for Todo</h1>
      </TitleContainer>
      <TodoContainer>
        <StatusContainer>
          <h1>No Status</h1>
          <Btn>Add Todo</Btn>
          <Todo draggable>
            <span>Todo</span>
            <span>x</span>
          </Todo>
        </StatusContainer>
        <StatusContainer>
          <h1>Not Started</h1>
        </StatusContainer>
        <StatusContainer>
          <h1>In Progress</h1>
        </StatusContainer>
        <StatusContainer>
          <h1>Completed</h1>
        </StatusContainer>
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
  width: 70%;
  outline: none;
  border: none;
  background-color: pink;
  padding: .3rem 0;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #6200ee;

  &:hover {
    background-color: #e77688;
  }
  &:active {
    transform: scale(1.1);
  }
`

const Todo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: .3rem .8rem;
  border-radius: 2px;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, .5);

  &:hover {
    transform: scale(1.1);
  }
`