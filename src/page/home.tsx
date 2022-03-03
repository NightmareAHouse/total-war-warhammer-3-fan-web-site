import Title from "../component/title-component/title";
import {Box} from "@chakra-ui/react";
import PreviewFractions from "../component/preview-fractions/preview-fractions";

const Home = () => {
    return (
        <Box>
            <Title/>
            <PreviewFractions />
        </Box>
    )
}

export default Home