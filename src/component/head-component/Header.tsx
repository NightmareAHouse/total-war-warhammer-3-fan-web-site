import {Box, Flex, Image, Text} from "@chakra-ui/react";
import logo from "../../resources/wh3-logo.png"
import previewPng from "../../resources/title-gif.gif"

const Header = () => {
    return (
        <Image className={"w-full h-full z-30"} title='title-png' src={previewPng} height={978}>
            {/*<Flex>*/}
            {/*    <Box flex='1'>*/}
            {/*        <Text>Text</Text>*/}
            {/*    </Box>*/}
            {/*    <Box flex='1'>*/}
            {/*        <Image src={logo} height={150} width={250}/>*/}
            {/*    </Box>*/}
            {/*    <Box flex='1'>*/}
            {/*        <Text>Text</Text>*/}
            {/*    </Box>*/}
            {/*</Flex>*/}
        </Image>
    )
}

export default Header