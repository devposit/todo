import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {Background,LoadingText} from '../../Styles'; 

const Loading = () => {
    return (
        <>
           <Background>
            <Box sx={{ display: 'flex' }}>
                <LoadingText>잠시만 기다려주세요</LoadingText>
                <CircularProgress />
            </Box> 
            </Background> 
        </>
    )
}

export default Loading;