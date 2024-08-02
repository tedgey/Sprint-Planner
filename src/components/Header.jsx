import styled from "styled-components";

const Header = styled.section`
  padding: 2em;
  background: #469597;
`;


export default () => {
  return (
    <>
      <Header className="col-12">
        <div className="d-flex justify-content-center" style={{ color: 'black'}}> [ ] </div>
      </Header>
    </>
  )
}
