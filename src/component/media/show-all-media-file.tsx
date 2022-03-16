import {Box, Flex, Image, Text} from "@chakra-ui/react";
import {mediaFilesType} from "../type.d";
import media from "./media";

type Props = {
    previousMediaFile: mediaFilesType,
    currentMediaFile: mediaFilesType,
    nextMediaFile: mediaFilesType,
    nextMedia: () => void,
    previousMedia: () => void
}

const ShowAllMediaFile = (props: Props) => {
    const {previousMediaFile, currentMediaFile, nextMediaFile, nextMedia, previousMedia} = props;

    const PreviousOrNextMediaFileShow = (props: {
        mediaFile: mediaFilesType,
        marginLeftParams: number,
        style: string,
        changeMedia: () => void
    }) => {
        const {mediaFile, marginLeftParams, style, changeMedia} = props;
        if (mediaFile.type === "image") {
            return (
                <>
                    <Image src={mediaFile.filePath} width={640} height={480} marginLeft={marginLeftParams}
                           opacity={0.4} onClick={changeMedia}/>
                    <Text className={style} style={{opacity: 0.4}}>
                        {mediaFile.text}
                    </Text>
                </>
            )
        } else {
            return (
                <>
                    <Image title={"fraction-media-video"}
                           src={`https://img.youtube.com/vi_webp/${mediaFile.videoId}/maxresdefault.webp`}
                           width={640} height={480} marginLeft={marginLeftParams}
                           style={{opacity: 0.4}} onClick={changeMedia}/>
                    <Text className={style} style={{opacity: 0.4}}>
                        {mediaFile.text}
                    </Text>
                </>
            )
        }
    }

    const CurrentMediaFileShow = (props: {
        mediaFile: mediaFilesType
    }) => {
        const {mediaFile} = props;
        if (mediaFile.type === "image") {
            return (
                <>
                    <Image src={mediaFile.filePath} width={640} height={480}/>
                    <Text className={"description-current-media-text"}>
                        {mediaFile.text}
                    </Text>
                </>
            )
        } else {
            return (
                <>
                    <article>
                        <iframe title={"fraction-media-video"} width="640" height="480" src={mediaFile.filePath}
                                frameBorder="0"/>
                    </article>
                    <Text className={"description-current-media-text"}>
                        {mediaFile.text}
                    </Text>
                </>
            )
        }
    }

    return (
        <Flex>
            <Box className={'previous-media'}>
                <PreviousOrNextMediaFileShow mediaFile={previousMediaFile} marginLeftParams={-100}
                                             style={"description-previous-media-text"} changeMedia={previousMedia}/>
            </Box>
            <Box className={'current-media'}>
                <CurrentMediaFileShow mediaFile={currentMediaFile}/>
            </Box>
            <Box className={'next-media'}>
                <PreviousOrNextMediaFileShow mediaFile={nextMediaFile} marginLeftParams={100}
                                             style={"description-next-media-text"} changeMedia={nextMedia}/>
            </Box>
        </Flex>
    )
}

export default ShowAllMediaFile;