import styled from "@mui/material/styles/styled";

/**
 * props passed in ar either primary, secondary or nothing
 */
const Wrapper = styled("div", {
  shouldForwardProp: (prop) => !["primary", "secondary"].includes(prop)
})(({ primary, secondary, theme }) => ({
  backgroundColor: primary ? '#F1F9FF' : secondary ? '#FFFFFF' : '#FFFFFF',
  padding: '60px 120px 240px 120px',
}));

export default Wrapper;
