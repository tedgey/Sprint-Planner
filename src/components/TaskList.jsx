import styled from "styled-components";
import CustomDropdown from "./CustomDropdown"

const DropdownList = styled.section`
  border-radius: 4px;
`;

export default () => {
  return (
    <>
      <DropdownList className="card mt-4">
        <section className="d-flex justify-content-between align-items-center p-3"> 
          <h6 className="mb-0"> All Tasks </h6>
          <h6 className="mb-0"> Owners </h6>
          <h6 className="mb-0"> filter, +</h6>
        </section>
        <CustomDropdown />
      </DropdownList>
    </>
  )
}
