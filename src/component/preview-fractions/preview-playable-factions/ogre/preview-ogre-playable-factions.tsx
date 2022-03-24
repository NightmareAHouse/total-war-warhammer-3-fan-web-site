import {
    Box,
    Button,
    Flex,
    Image,
    Link,
    Spacer,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useStyles,
    useTab
} from "@chakra-ui/react";
import GreasusGoldtoothIcon from "../../../../resources/lord-icon/greasus-goldtooth-icon.png";
import GreasusGoldtoothChoosingIcon from "../../../../resources/lord-icon/greasus-goldtooth-choosing-icon.png";
import ScragTheSlaughterIcon from "../../../../resources/lord-icon/scrag-the-slaughter-icon.png";
import ScragTheSlaughterChoosingIcon from "../../../../resources/lord-icon/scrag-the-slaughter-choosing-icon.png";
import PreviewGreasusGoldtooth from "./preview-greasus-goldtooth";
import PreviewScragTheSlaughterer from "./preview-scrag-the-slaughterer";

const Greasus = [GreasusGoldtoothIcon, GreasusGoldtoothChoosingIcon];
const Scrag = [ScragTheSlaughterIcon, ScragTheSlaughterChoosingIcon];

const PreviewOgrePlayableFactions = () => {
    const CustomIcon = (props: any) => {
        const styles = useStyles();
        const tabProps = useTab(props);
        const isSelected = tabProps["aria-selected"];

        return (
            <Box as="button" sx={styles.tab} {...tabProps}>
                <Box as="span" mr="2">
                    {isSelected ?
                        <>
                            <Image width={86} height={115} src={props.children[1]}/>
                        </>
                        :
                        <>
                            <Image width={86} height={115} src={props.children[0]}/>
                        </>
                    }
                </Box>
            </Box>
        );
    }

    return (
        <>
            <Flex>
                <Box marginLeft={5}>
                    <Link href={`/`}>
                        <Button width={175} colorScheme={"blackAlpha"}>
                            <Text className={"button-text"}>
                                Back to main page
                            </Text>
                        </Button>
                    </Link>
                </Box>

                <Spacer/>

                <Text className={"text"}>
                    Ogre: Playable Factions
                </Text>

                <Spacer/>

                <Box marginRight={5}>
                    <Button width={175} colorScheme={"blackAlpha"}>
                        <Text className={"button-text"}>
                            Character Comparison
                        </Text>
                    </Button>
                </Box>
            </Flex>

            <Flex>
                <Tabs variant='unstyled'>
                    <TabList marginLeft={100} marginTop={25}>
                        <CustomIcon>
                            {Greasus}
                        </CustomIcon>
                        <CustomIcon>
                            {Scrag}
                        </CustomIcon>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <PreviewGreasusGoldtooth/>
                        </TabPanel>

                        <TabPanel>
                            <PreviewScragTheSlaughterer/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        </>
    )
}

export default PreviewOgrePlayableFactions