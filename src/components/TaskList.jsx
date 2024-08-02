import styled from "styled-components";
import CustomDropdown from "./CustomDropdown"

const DropdownList = styled.section`
  border-radius: 4px;
`;

const DropdownHeader = styled.section`
  
`


export default () => {
  return (
    <>
      <DropdownList className="card mt-4">
        <DropdownHeader className="d-flex justify-content-between align-items-center p-3"> 
          <h6 className="mb-0"> All Tasks </h6>
          <h6 className="mb-0"> Owners </h6>
          <h6 className="mb-0"> filter, +</h6>
        </DropdownHeader>
        <CustomDropdown />
      </DropdownList>
    </>
  )
}
