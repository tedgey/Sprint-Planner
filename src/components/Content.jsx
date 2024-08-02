import styled from "styled-components";
import GraphCard from "./GraphCard"
import TaskList from "./TaskList"

const Content = styled.section`
  padding: 2em;
`;


export default () => {
  return (
    <>
      <Content>
        <div className="d-flex justify-content-around">
          <GraphCard type={'group'} />
          <GraphCard type={'individual'} />
        </div>
        <TaskList className="col-12" />
      </Content>
    </>
  )
}

