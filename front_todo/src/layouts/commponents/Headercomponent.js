import { Grid, Typography } from "@mui/material";

const HeaderComponent = () => {
    return (
        <>
            <Grid 
                container
                item
                xs={12}
                sm={12}
                height={"50px"}
                justifyContent="flex-end" // 오른쪽 정렬
                alignItems="center" // 세로 가운데 정렬
                style={{ paddingRight: '50px',
                         opacity: 30
                 }} 
            >
                <Typography variant="span" color={"textPrimary"}>오늘의 날씨는?</Typography>
            </Grid>
        </>
    );
}

export default HeaderComponent;