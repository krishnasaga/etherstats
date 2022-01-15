import React from 'react';
import { useParams } from 'react-router';
import { Box } from 'theme-ui';
import { useEtherStats } from '../../data/useEtherStats';

export const SourceCode = ()=> {
    const { id } = useParams();

    const {number,unit,scaleName,mantissa} = useEtherStats({ id,autoScale: true, statName: stat });

    return <Box>
        {}
    </Box>;
};
