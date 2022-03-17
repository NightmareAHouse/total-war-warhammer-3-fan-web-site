import {Text, Box, Image, Flex} from "@chakra-ui/react";
import theIceCourt from "../../../resources/the-ice-court.png"

const PreviewKislevPlayableFactions = () => {
    return (
        <>
            <Text>
                Kislev: Playable Factions
            </Text>
            <div style={{margin: 20}} />
            <Flex marginLeft={50}>
                <Box>
                    <Image src={theIceCourt} width={125} height={125} />
                </Box>

                <Box>
                    <Text width={225} textAlign={"start"}>The Ice Court</Text>
                    <Text width={225} textAlign={"start"}>Tzarina Katarin</Text>
                </Box>
            </Flex>
        </>
    )
}

export default PreviewKislevPlayableFactions