import React from 'react';
import { Grid, Box, Text, Heading } from 'theme-ui';
import { Icon } from '../Icon';

export const NumberStat = ({title = ""}) => {
    return <Box p={[50]} sx={{ width: '100%', textAlign: 'left', alignItems: 'center' }}><Grid>
        <Box>
            <Grid columns={['100px 1fr']} sx={{
                textAlign: 'left',
                alignItems: 'cneter',
                justifyItems: 'self-start'
            }}>
            <Icon name={'market-cap'} size={100} color={'primary'} sx={{ display: 'inline-block'}}/>
            <Heading as={'h4'} sx={{ fontSize: [5], verticalAlign: 'middle'}} >
                   Crypto <br/>Marketcap
           </Heading>
           </Grid>
            <Text sx={{ fontSize: [7], fontWeight: ['normal']}}>
                34.45 T
                </Text>
        </Box>
    </Grid></Box>
};
