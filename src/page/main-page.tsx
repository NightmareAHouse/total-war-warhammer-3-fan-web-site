import Title from "../component/title-component/title";
import {Box} from "@chakra-ui/react";
import PreviewFractions from "../component/preview-fractions/preview-fractions";
import Media from "../component/media/media";

const MainPage = () => {
    return (
        <>
            <Box>
                <Title/>
                <div style={{margin: 35}}/>
                <PreviewFractions/>
                <Media/>
            </Box>
        </>
    )
}

export default MainPage;