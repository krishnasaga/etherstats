import React from 'react';
import { Grid,Box,Text,Container,Image,Heading } from 'theme-ui';
import { useCryptoStats } from '../data/useCryptoStats';

import {
    Link
  } from "react-router-dom";

import { NumberStat  } from '../Components/NumberStat';
const App = () => {
    const list = useCryptoStats();
    
    return <Container px={[4,0]}>
          <Heading as={'h1'} py={100} sx={{ fontSize: [100], textAlign: 'center'}}>
            Crypto River
        </Heading>
        { false ? <GlobalStats/> : null }
        <Grid columns={[2,10]} gap={4}>
      
        {
            list.map((data) => {
                return <Box as={Link} color={'text'} p={2} to={`/cryptoassets/${data.id}`} sx={{ textAlign: 'center', textDecoration: 'none', boxShadow: [1]}}>
                    <Image src={data.image} />
                    <Text as={'h4'} sx={{fontSize: [2]}}>{data.name}</Text>
                </Box>
            })
        }
    </Grid></Container>
}

const GlobalStats = () => {
    return  <Box><Grid columns={[2]} sx={{ justifyItems: 'center', textAlign: 'center'}}>
    <NumberStat>
        34.45
    </NumberStat>
    <NumberStat>
        34.45
    </NumberStat>
</Grid>
<Grid columns={[4]}>
    <NumberStat>
        34.45
    </NumberStat>
    <NumberStat>
        34.45
    </NumberStat>
    <NumberStat>
        34.45
    </NumberStat>
    <NumberStat>
        34.45
    </NumberStat>
</Grid></Box>
}

export default App;
