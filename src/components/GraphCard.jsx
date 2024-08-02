import styled from "styled-components";

const Content = styled.section`
  padding: 4em;
  background: whitesmoke;
`;


export default ({ type }) => {
  return (
    <>
      <Content className="card col-6 mx-2">
        { (type == 'group')
          ? 
            <div> 
              <h6> Committed </h6> 
              <h6> Achieved </h6> 
            </div>
          : <div> Personal Progress vs Projected </div> 
        }
      </Content>
    </>
  )
}
