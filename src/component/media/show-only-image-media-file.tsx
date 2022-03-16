import {mediaFilesType} from "../type.d";
import {Box, Flex, Image, Text} from "@chakra-ui/react";
import "../../css/media.content.css"

type Props = {
    previousMediaFile: mediaFilesType,
    currentMediaFile: mediaFilesType,
    nextMediaFile: mediaFilesType,
    nextMedia: () => void,
    previousMedia: () => void
}

const ShowOnlyImageMediaFile = (props: Props) => {
    const {previousMediaFile, currentMediaFile, nextMediaFile, nextMedia, previousMedia} = props;

    return (
        <Flex>
            <Box className={'previous-media'}>
                <Image src={previousMediaFile.filePath} width={640} height={480} marginLeft={-100}
                       opacity={0.4} onClick={previousMedia}/>
                <Text className={"description-previous-media-text"} style={{opacity: 0.4}}>
                    {previousMediaFile.text}
                </Text>
            </Box>
            <Box className={'current-media'}>
                <Image src={currentMediaFile.filePath} width={640} height={480}/>
                <Text className={"description-current-media-text"}>
                    {currentMediaFile.text}
                </Text>
            </Box>
            <Box className={'next-media'}>
                <Image src={nextMediaFile.filePath} width={640} height={480} marginLeft={100}
                       opacity={0.4} onClick={nextMedia}/>
                <Text className={"description-next-media-text"} style={{opacity: 0.4}}>
                    {nextMediaFile.text}
                </Text>
            </Box>
        </Flex>
    )
}

export default ShowOnlyImageMediaFile