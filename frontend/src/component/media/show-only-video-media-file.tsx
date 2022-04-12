import {mediaFilesType} from "../type.d";
import {Box, Flex, Image, Text} from "@chakra-ui/react";
import "../../css/media.content.css";

type Props = {
    previousMediaFile: mediaFilesType,
    currentMediaFile: mediaFilesType,
    nextMediaFile: mediaFilesType,
    nextMedia: () => void,
    previousMedia: () => void
}

const ShowOnlyVideoMediaFile = (props: Props) => {
    const {previousMediaFile, currentMediaFile, nextMediaFile, nextMedia, previousMedia} = props;

    return (
        <Flex>
            <Box className={'previous-media'}>
                <Image title={"fraction-media-video"} marginLeft={-100}
                       src={`https://img.youtube.com/vi_webp/${previousMediaFile.videoId}/maxresdefault.webp`}
                       width={640} height={480} style={{opacity: 0.4}} onClick={previousMedia}/>
                <Text className={"description-previous-media-text"} style={{opacity: 0.4}}>
                    {previousMediaFile.text}
                </Text>
            </Box>
            <Box className={'current-media'}>
                <article>
                    <iframe title={"fraction-media-video"} width="640" height="480" src={currentMediaFile.filePath}
                            frameBorder="0"/>
                    <Text className={"description-current-media-text"}>
                        {currentMediaFile.text}
                    </Text>
                </article>
            </Box>
            <Box className={'next-media'}>
                <Image title={"fraction-media-video"} marginLeft={100}
                       src={`https://img.youtube.com/vi_webp/${nextMediaFile.videoId}/maxresdefault.webp`}
                       width={640} height={480} style={{opacity: 0.4}} onClick={nextMedia}/>
                <Text className={"description-next-media-text"} style={{opacity: 0.4}}>
                    {nextMediaFile.text}
                </Text>
            </Box>
        </Flex>
    )
}

export default ShowOnlyVideoMediaFile;