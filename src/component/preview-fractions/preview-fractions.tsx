import {AspectRatio, Box, Flex, HStack, Icon, Image, Text} from "@chakra-ui/react"
import "../../css/preview-faction.content.css"
import cathay from "../../resources/cathay.jpg"

const PreviewFactions = () => {
    const CircleIcon = (props: any) => (
        <Icon viewBox='0 0 200 200' {...props}>
            <path
                fill='currentColor'
                d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
            />
        </Icon>
    )

    return (
        <Box style={{height: 1077, position: 'relative', overflow: "hidden"}}>
            <Flex className={"preview"}>
                <Box marginLeft={10} marginRight={10}>
                    <article className={"article"}>
                        <iframe width="600" height="500" src="https://www.youtube.com/embed/WrX1aGHK1lM"
                                frameBorder="0" />
                    </article>
                </Box>
                <Box>
                    <Image src={cathay} height={500}/>
                </Box>
                <Box marginLeft={10} marginRight={10}>
                    <Text textAlign={"left"}>
                        Cathay (also known as Imperial Cathay, the Empire of the Celestial Dragon, the Kingdom of
                        the Dragon, Grand Cathay Great Cathay, Grand Empire of Cathay and the Celestial
                        Empire) is a populous nation of humans located in the Far East, beyond the Dark Lands and the
                        Mountains of Mourn. To the north, with the Great Bastion as border, lie the Eastern Steppes and
                        the
                        Hung and Kurgan territories within the Chaos Wastes. To the east are the island realm of Nippon
                        and
                        the Far Sea, and beyond that the Boiling Sea and Naggaroth. To the south are the Kingdoms of Ind
                        and
                        the Hinterlands of Khuresh.
                    </Text>
                </Box>
            </Flex>
            <Box marginTop={125}>
                <HStack className={"buttons"}>
                    <CircleIcon boxSize={20} color={'#41474c'}/>
                    <CircleIcon boxSize={20}/>
                    <CircleIcon boxSize={20}/>
                    <CircleIcon boxSize={20}/>
                    <CircleIcon boxSize={20}/>
                    <CircleIcon boxSize={20}/>
                    <CircleIcon boxSize={20}/>
                    <CircleIcon boxSize={20}/>
                </HStack>
            </Box>
        </Box>
    )
}

export default PreviewFactions