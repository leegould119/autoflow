import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Wrapper, Divider} from './components/styled';
import { theme } from './components';

const App = () => (
  <ThemeProvider theme={theme}>
    <Wrapper primary>
    <Typography variant='body1'><strong>Stratus</strong> for bodyshop</Typography>
        <Typography variant='h1'>Repair like the best</Typography>
        <Typography variant='body2' style={{ color: '#778592', marginBottom: '40px' }}>Expertise and technology combine to bring you the <br /> next generation of bodyshop <br /> management solutions.</Typography>
        <Stack spacing={2} direction="row">
          <Button variant="contained" style={{ backgroundColor: '#2699FB'}} >Sign up</Button>
          <Button variant="outlined">start a free trial</Button>
          <Button variant="text">contact sales</Button>
        </Stack>
    </Wrapper>
    <Divider primary/>
    <Wrapper secondary>
    <Typography variant='h1'>Explore Stratus</Typography>
      <Typography variant='body2' style={{ color: '#07192C', marginBottom: '40px' }}>Explore our range of subscriptions <br /> to suite your business needs</Typography>
      <Button variant="contained" style={{ backgroundColor: '#07192C'}} >lets get started</Button>
    </Wrapper>
  </ThemeProvider>
  );

export default App;
