import {Box, Flex, Icon, Image, Text} from "@chakra-ui/react";
import "../../css/media.content.css"
import test1 from "../../resources/kislev.jpg"
import test2 from "../../resources/cathaj.jpg"
import test3 from "../../resources/slaanesh.jpg"
import {ArrowBackIcon, ArrowForwardIcon} from "@chakra-ui/icons";
import {useState} from "react";

type mediaFilesType = {
    id: number,
    filePath: string
}


const mediaFiles: mediaFilesType[] = [{
    id: 0,
    filePath: test1
}, {
    id: 1,
    filePath: test2
}, {
    id: 2,
    filePath: test3
}]

const Media = () => {
    const [previousMediaFile, setPreviousMediaFile] = useState<mediaFilesType>(mediaFiles[2]);
    const [currentMediaFile, setCurrentMediaFile] = useState<mediaFilesType>(mediaFiles[0]);
    const [nextMediaFile, setNextMediaFile] = useState<mediaFilesType>(mediaFiles[1]);

    const forwardToNextMedia = () => {
        if ((previousMediaFile.id + 1) !== mediaFiles.length) {
            setPreviousMediaFile(mediaFiles[previousMediaFile.id + 1])
        } else {
            setPreviousMediaFile(mediaFiles[0])
        }

        if ((currentMediaFile.id + 1) !== mediaFiles.length) {
            setCurrentMediaFile(mediaFiles[currentMediaFile.id + 1]);
        } else {
            setCurrentMediaFile(mediaFiles[0])
        }

        if ((nextMediaFile.id + 1) !== mediaFiles.length) {
            setNextMediaFile(mediaFiles[nextMediaFile.id + 1])
        } else {
            setNextMediaFile(mediaFiles[0])
        }
    }

    const forwardToPreviousMedia = () => {
        if ((previousMediaFile.id) !== 0) {
            setPreviousMediaFile(mediaFiles[previousMediaFile.id - 1])
        } else {
            setPreviousMediaFile(mediaFiles[2])
        }

        if ((currentMediaFile.id) !== 0) {
            setCurrentMediaFile(mediaFiles[currentMediaFile.id - 1]);
        } else {
            setCurrentMediaFile(mediaFiles[2])
        }

        if ((nextMediaFile.id) !== 0) {
            setNextMediaFile(mediaFiles[nextMediaFile.id - 1])
        } else {
            setNextMediaFile(mediaFiles[2])
        }
    }

    return (
        <Box style={{height: 1000, position: 'relative', overflow: "hidden"}}>
            <Flex className={"description"}>
                <Box>
                    <Text textAlign={"left"} marginTop={50} marginLeft={151}>
                        Media
                    </Text>
                    <Flex>
                        <Box marginLeft={100} marginRight={20}>
                            All
                        </Box>
                        <Box>
                            Image
                        </Box>
                        <Box marginLeft={20}>
                            Video
                        </Box>

                        <Box marginLeft={1250}>
                            <ArrowBackIcon viewBox={"0 0 20 20"} marginLeft={25} marginRight={25}
                                           onClick={forwardToPreviousMedia}/>
                            <ArrowForwardIcon viewBox={"0 0 20 20"} marginLeft={25} marginRight={25}
                                              onClick={forwardToNextMedia}/>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            <Flex className={"media-slider"}>
                <Box marginRight={30} marginTop={225}>
                    <Image src={previousMediaFile.filePath} width={400} height={200}
                           opacity={0.4}/>
                </Box>
                <Box>
                    <Image src={currentMediaFile.filePath} width={900} height={600}
                           opacity={1}/>
                </Box>
                <Box marginLeft={30} marginTop={225}>
                    <Image src={nextMediaFile.filePath} width={400} height={200}
                           opacity={0.4}/>
                </Box>
            </Flex>
        </Box>
    )
}

export default Media