import {Box, Flex, TabList, TabPanel, TabPanels, Tabs, Tab, Text, useStyles, useTab, Image, Link, Button} from "@chakra-ui/react";
import "../../../../css/preview-playable-faction.content.css"
import MiaoYingChoosingIcon from "../../../../resources/lord-icon/miao-ying-chosing-icon.png";
import JaoYingIcon from "../../../../resources/lord-icon/jao-ying-chosing-icon.png"
import PreviewMiaoYing from "./preview-miao-ying";
import PreviewJaoYing from "./preview-jao-ying";

const PreviewKislevPlayableFactions = () => {

    // const CustomIcon = (props: any) => {
    //     const styles = useStyles();
    //     const tabProps = useTab(props);
    //     const isSelected = tabProps["aria-selected"];
    //
    //     return (
    //         <Box as="button" sx={styles.tab} {...tabProps}>
    //             <Box as="span" mr="2">
    //                 {isSelected ?
    //                     <>
    //                         <Image src={props.children[1]}/>
    //                     </>
    //                     :
    //                     <>
    //                         <Image src={props.children[0]}/>
    //                     </>
    //                 }
    //             </Box>
    //         </Box>
    //     );
    // }

    return (
        <>
            <Flex>
                <Link href={`/`}>
                    <Button width={150} colorScheme={"blackAlpha"}>
                        <Text className={"button-text"}>
                            Back to main page
                        </Text>
                    </Button>
                </Link>

                <Text className={"text"} marginLeft={598}>
                    Cathaj: Playable Factions
                </Text>
            </Flex>

            <Flex>
                <Tabs variant='unstyled'>
                    <TabList marginLeft={100} marginTop={25}>
                        <Tab>
                            <Image src={MiaoYingChoosingIcon} />
                        </Tab>
                        <Tab>
                            <Image src={JaoYingIcon} />
                        </Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <PreviewMiaoYing/>
                        </TabPanel>

                        <TabPanel>
                            <PreviewJaoYing/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        </>
    )
}

export default PreviewKislevPlayableFactions