import React from 'react';
import { Image,Grid,Box,Text,ThemeProvider,Container } from 'theme-ui';
import { useEtherStats, useInfo } from '../data/useEtherStats';
import darkTheme from '../themes/dark';
import { Icon } from '../Components/Icon';
import Fade from 'react-reveal/Fade';
import { useParams } from 'react-router';
import Chart from '../Components/Charts/Line';

function App() {

   const { id } = useParams();
   console.log(id);
  return (<><Box sx={{ height: '100vh' }}>
      <Title id={id} />
      <Description id={id} />
  </Box><Box className="App">
          <Container>
              
              <Grid columns={[1]} sx={{ alignItems: 'center' }}>
                  <EthStat 
                     id={id} 
                     text={'Circulating Supply'} 
                     stat={'circulating_supply'} 
                     iconName={'distribute'} 
                     description={'The amount of eth that is circulating in the market and are in public hands. It is analogous to the flowing shares in the stock market. Circulating Supply is the best approximation of the number of assets that are circulating in the market and in the general public\'s hands.'} />
                  <Chart/>
                  <EthStat 
                       id={id} 
                       text={'Market Capitalization'} 
                       stat={'market_cap'} 
                       iconName={'market-cap'} 
                       description={'The amount of eth that is circulating in the market and are in public hands. It is analogous to the flowing shares in the stock market. Market capitalization of the cryptoasset is calculated by multiplying the existing reference price of the cryptoasset by the current circulating supply'} />
                  <Chart/>
              </Grid>
          </Container>
      </Box></>);
}

const SingleStat = ({text,number,unit,description,scaleName,iconName,mantissa}) => {
  return <Box  p={2} bg={'secondary'} py={200} >
   <Grid columns={[2]} sx={{ alignItems: 'center', justifyItems: 'center'}}>
     <Box>
       <Grid columns={['100px 1fr']} sx={{ alignItems: 'center'}} >
         <Box>
            <Icon name={iconName} color={'primary'} size={100} /> 
         </Box>
         <Text as={'h2'} sx={{ fontSize: [7], fontWeight: ['bold'], lineHeight: 1 }}>
           {text}
         </Text>
       </Grid>
       <Grid>
       <Text as={'p'} py={20} sx={{ fontSize: [3], fontWeight: ['extralight'], lineHeight: 1.2 }} >
          {description}
       </Text>
       </Grid>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Box>
        <Text as={'span'} sx={{ fontSize: [8], fontWeight: ['bold'] }} >
          {number}
        </Text>
        <Text as={'span'} sx={{ fontSize: [8], fontWeight: ['normal'] }} >
          {
            scaleName
          }
        </Text>
    
        <Text sx={{ fontSize: [5], fontWeight: [1] }} >
          {unit}
        </Text>
        <Text as={'div'} variant={'light'} sx={{ fontSize: [4], fontWeight: ['bold'] }} >
          {mantissa} {unit}
        </Text>
      
        <Icon name={'pacman-a'} color={'primary'}  size={100} /> 

        </Box>

        
      </Box>
    </Grid>
  </Box>
};

const EthStat = ({text,stat,iconName,description,id}) => {
  const {number,unit,scaleName,mantissa} = useEtherStats({ id,autoScale: true, statName: stat });

  return <Fade bottom>
       <SingleStat 
         text={text} 
         iconName={iconName} 
         description={description} 
         number={number} 
         unit={unit} 
         scaleName={scaleName}
         mantissa={mantissa}/>
    </Fade>;
}

const Description = ({id}) => {
  const { description, short_description } = useInfo({id});

  return <Container>
    <Box as={'p'} sx={{ textAlign: 'center', fontSize: [5]}}>
        <Text variant={'light'} sx={{ fontWeight: 'bold' }}>
      <div dangerouslySetInnerHTML={{ __html: short_description }} />
      </Text>
    </Box>
    <Box as={'p'} py={[5]} sx={{ textAlign: 'center', fontSize: [2]}}>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </Box>
  </Container>
}

const Title = ({id}) => {

  const { image,name  } = useInfo({id});

  if(!image) return null;

  return <Container 
  pt={100}
  sx={{
    textAlign: 'center',
    textShadow: 1,
  }}>
    <Grid sx={{alignItems: 'center', justifyItems: 'center' }} columns={[1]}>
      <Image src={image.large} sx={{height: '200px', width: '200px' }} />
      <Text sx={{
          fontSize: [100],
          fontWeight: ['700']
        }}>
         {name}
      </Text>
    </Grid>
  </Container>
}

export default App;
