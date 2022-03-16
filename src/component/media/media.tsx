import {Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";
import "../../css/media.content.css"
import test1 from "../../resources/kislev.jpg"
import test2 from "../../resources/cathaj.jpg"
import test3 from "../../resources/slaanesh.jpg"
import {ArrowBackIcon, ArrowForwardIcon} from "@chakra-ui/icons";
import {useState} from "react";
import {mediaFilesType} from "../type.d";
import ShowAllMediaFile from "./show-all-media-file";
import ShowOnlyImageMediaFile from "./show-only-image-media-file";
import ShowOnlyVideoMediaFile from "./show-only-video-media-file";

const allMediaFiles: mediaFilesType[] = [{
    id: 0,
    type: "image",
    text: 'Kislev art',
    filePath: test1
}, {
    id: 1,
    type: "video",
    text: 'Total War Warhammer 3 Announce trailer',
    filePath: "https://www.youtube.com/embed/HAr7yUlM0Po",
    videoId: 'HAr7yUlM0Po'
}, {
    id: 2,
    type: "image",
    text: 'Cathaj art',
    filePath: test2
}, {
    id: 3,
    type: "video",
    text: 'Kislev vs Khorne game trailer',
    filePath: "https://www.youtube.com/embed/8JWqlDxEQps",
    videoId: '8JWqlDxEQps'
}, {
    id: 4,
    type: "image",
    text: 'Slaanesh Art',
    filePath: test3
}, {
    id: 5,
    type: 'video',
    text: 'Cathay vs Tzeentch game trailer',
    filePath: 'https://www.youtube.com/embed/033FWxL22A0',
    videoId: '033FWxL22A0'
}];

const onlyImageMediaFiles: mediaFilesType[] = [{
    id: 0,
    type: "image",
    text: 'Kislev art',
    filePath: test1
}, {
    id: 1,
    type: "image",
    text: 'Cathaj art',
    filePath: test2
}, {
    id: 2,
    type: "image",
    text: 'Slaanesh Art',
    filePath: test3
}]

const onlyVideoMediaFiles: mediaFilesType[] = [{
    id: 0,
    type: "video",
    text: 'Total War Warhammer 3 Announce trailer',
    filePath: "https://www.youtube.com/embed/HAr7yUlM0Po",
    videoId: 'HAr7yUlM0Po'
}, {
    id: 1,
    type: "video",
    text: 'Kislev vs Khorne game trailer',
    filePath: "https://www.youtube.com/embed/8JWqlDxEQps",
    videoId: '8JWqlDxEQps'
}, {
    id: 2,
    type: 'video',
    text: 'Cathay vs Tzeentch game trailer',
    filePath: 'https://www.youtube.com/embed/033FWxL22A0',
    videoId: '033FWxL22A0'
}]

const Media = () => {
    const [data, setData] = useState<mediaFilesType[]>(allMediaFiles)
    const [count, setCount] = useState<number>(1);
    const [previousMediaFile, setPreviousMediaFile] = useState<mediaFilesType>(data[data.length - 1])
    const [currentMediaFile, setCurrentMediaFile] = useState<mediaFilesType>(data[0]);
    const [nextMediaFile, setNextMediaFile] = useState<mediaFilesType>(data[1]);

    const forwardToNextMedia = () => {
        if ((previousMediaFile.id + 1) !== data.length) {
            setPreviousMediaFile(data[previousMediaFile.id + 1])
        } else {
            setPreviousMediaFile(data[0])
        }

        if ((currentMediaFile.id + 1) !== data.length) {
            setCount(count + 1)
            setCurrentMediaFile(data[currentMediaFile.id + 1]);
        } else {
            setCount(1)
            setCurrentMediaFile(data[0])
        }

        if ((nextMediaFile.id + 1) !== data.length) {
            setNextMediaFile(data[nextMediaFile.id + 1])
        } else {
            setNextMediaFile(data[0])
        }
    }

    const forwardToPreviousMedia = () => {
        if ((previousMediaFile.id) !== 0) {
            setPreviousMediaFile(data[previousMediaFile.id - 1])
        } else {
            setPreviousMediaFile(data[data.length - 1])
        }

        if ((currentMediaFile.id) !== 0) {
            setCount(count - 1)
            setCurrentMediaFile(data[currentMediaFile.id - 1]);
        } else {
            setCount(data.length)
            setCurrentMediaFile(data[data.length - 1])
        }

        if ((nextMediaFile.id) !== 0) {
            setNextMediaFile(data[nextMediaFile.id - 1])
        } else {
            setNextMediaFile(data[data.length - 1])
        }
    }

    const showAllMedia = () => {
        setCount(1)
        setData(allMediaFiles);
        setPreviousMediaFile(allMediaFiles[allMediaFiles.length - 1]);
        setCurrentMediaFile(allMediaFiles[0]);
        setNextMediaFile(allMediaFiles[1]);
    }

    const showOnlyImageMedia = () => {
        setCount(1)
        setData(onlyImageMediaFiles);
        setPreviousMediaFile(onlyImageMediaFiles[onlyImageMediaFiles.length - 1]);
        setCurrentMediaFile(onlyImageMediaFiles[0]);
        setNextMediaFile(onlyImageMediaFiles[1]);
    }

    const showOnlyVideoMedia = () => {
        setCount(1)
        setData(onlyVideoMediaFiles);
        setPreviousMediaFile(onlyVideoMediaFiles[onlyVideoMediaFiles.length - 1]);
        setCurrentMediaFile(onlyVideoMediaFiles[0]);
        setNextMediaFile(onlyVideoMediaFiles[1]);
    }

    return (
        <Box style={{height: 1000, position: 'relative', overflow: "hidden"}}>
            <Flex className={"description"}>
                <Box>
                    <Text textAlign={"left"} marginTop={50} marginLeft={151}>
                        Media
                    </Text>
                    <Flex>
                        <Tabs>
                            <TabList marginLeft={100} marginTop={25}>
                                <Tab onClick={showAllMedia}>All</Tab>
                                <Tab onClick={showOnlyImageMedia}>Image</Tab>
                                <Tab onClick={showOnlyVideoMedia}>Video</Tab>
                            </TabList>

                            <Flex className={"media-slider"}>
                                <TabPanels>
                                    <TabPanel>
                                        <ShowAllMediaFile previousMediaFile={previousMediaFile}
                                                          currentMediaFile={currentMediaFile}
                                                          nextMediaFile={nextMediaFile}
                                                          previousMedia={forwardToPreviousMedia}
                                                          nextMedia={forwardToNextMedia} />
                                    </TabPanel>
                                    <TabPanel>
                                        <ShowOnlyImageMediaFile  previousMediaFile={previousMediaFile}
                                                                 currentMediaFile={currentMediaFile}
                                                                 nextMediaFile={nextMediaFile}
                                                                 previousMedia={forwardToPreviousMedia}
                                                                 nextMedia={forwardToNextMedia} />
                                    </TabPanel>
                                    <TabPanel>
                                        <ShowOnlyVideoMediaFile  previousMediaFile={previousMediaFile}
                                                                 currentMediaFile={currentMediaFile}
                                                                 nextMediaFile={nextMediaFile}
                                                                 previousMedia={forwardToPreviousMedia}
                                                                 nextMedia={forwardToNextMedia} />
                                    </TabPanel>
                                </TabPanels>
                            </Flex>
                        </Tabs>

                        <Box marginLeft={1200} marginTop={5}>
                            {count} / {data.length}
                        </Box>

                        <Box marginLeft={5}>
                            <ArrowBackIcon viewBox={"0 0 20 20"} marginLeft={25} marginRight={25} marginTop={25}
                                           onClick={forwardToPreviousMedia} cursor={"pointer"}/>
                            <ArrowForwardIcon viewBox={"0 0 20 20"} marginLeft={25} marginRight={25} marginTop={25}
                                              onClick={forwardToNextMedia} cursor={"pointer"}/>
                        </Box>

                    </Flex>
                </Box>
            </Flex>
        </Box>
)
}

export default Media