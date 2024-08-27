import HeaderComponent from './layouts/commponents/Headercomponent';
import FooterComponent from './layouts/commponents/Footercompoent';
import MainComponent from './layouts/commponents/MainComponent';
import { Grid } from '@mui/material';

const Main = () => {
    return (
        <>
            <Grid container 
                direction={"column"}
                style={{ minHeight: '100vh' }}>
                <HeaderComponent />
                    <Grid item xs style={{flexGrow: 1}}>
                        <MainComponent />
                    </Grid>
                <FooterComponent />
            </Grid>
        </>
    )
}

export default Main;