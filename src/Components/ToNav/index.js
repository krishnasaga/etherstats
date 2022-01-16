import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Text,Grid,Box,Image,Button } from 'theme-ui';
import {
  Link
} from "react-router-dom";

const Top = () => {
  const { isAuthenticated } = useAuth0();

  return <Box sx={{ boxShadow: [0]}}>
    <Grid columns={['0.5fr 1fr 10fr 2fr']}>
      <Box py={20}>
       
      </Box>
      <Box py={20}>
        <Box as={Link} to={'/'} sx={{ textDecoration: 'none', color: 'unset' }}>
          CryptoRiver
        </Box>
      </Box>
      <Box></Box>
      <Box py={20}>
        <Box>
            { isAuthenticated ? <Profile/> : <LoginButton/> }
         </Box>
      </Box>
    </Grid>
  </Box>
}

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Box>
      <Button onClick={() => loginWithRedirect()}>Log In</Button> 
    </Box>;
};

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if(!isAuthenticated) {
    return <LoginButton/>;
  }

  return (
    isAuthenticated && (
      <Grid columns={[2]} sx={{ alignItems: 'center'}}>
        <Text sx={{ textAlign: 'right'}}>{user.name.split(' ')[0]}</Text>
        <Image sx={{width: 20, height: 20, borderRadius: 100}} src={user.picture} alt={user.name} />
      </Grid>
    )
  );
};




export default Top;
