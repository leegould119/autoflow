import styled from "@mui/material/styles/styled";

/**
 * divider component for the bottom of the head component can be resused
 */
const Divider = styled("div", {
    shouldForwardProp: (prop) => !["primary"].includes(prop)
  })(({ primary }) => ({
    borderTop: primary && '10vw solid #F1F9FF',
    borderLeft: '100vw solid transparent',
  }));
  
  export default Divider;