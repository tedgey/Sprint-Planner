import styled from "styled-components";

const CustomDropdown = styled.details`
  border-radius: 4px;
`;

const CustomSummary = styled.summary`
  padding: 1em;

  &:hover {
    background-color: #BBC6C8
  }
`

const StatusWrapper = styled.div`
  width: 20%;
`


export default () => {
  return (
    <>
      <CustomDropdown className="border-top">
        <CustomSummary className="d-flex align-items-center justify-content-between"> 
          <strong> Title </strong>
          <div> owners icon </div>
          <div> + </div>
        </CustomSummary>
        <div className="p-4 d-flex justify-content-between"> 
          <div> 
            <strong> Details</strong>
            <div> Lorem ipsum </div>
          </div>
          <StatusWrapper className="d-flex justify-content-between"> 
            <div>
              <strong className="mr-4"> Status </strong>
              <div> In Progress </div>
            </div>
            <div>
              <strong className="mr-4"> Value </strong>
              <div> 5 </div>
            </div>
          </StatusWrapper>
        </div>
      </CustomDropdown>
    </>
  )
}
