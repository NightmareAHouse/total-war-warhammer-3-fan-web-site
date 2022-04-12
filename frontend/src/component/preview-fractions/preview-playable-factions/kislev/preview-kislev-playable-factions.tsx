import {
    Box,
    Flex,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useStyles,
    useTab,
    Image,
    Link,
    Button,
    Spacer
} from "@chakra-ui/react";
import "../../../../css/preview-playable-faction.content.css"
import CatarinaIcon from "../../../../resources/lord-icon/catarin-icon.png";
import CatarinaChoosingIcon from './../../../../resources/lord-icon/catarin-chosing-icong.png';
import KostaltynIcon from './../../../../resources/lord-icon/kostaltyn-icon.png';
import KostaltynChoosingIcon from "../../../../resources/lord-icon/kostaltyn-chosing-icon.png";
import PreviewTzarinaKatarina from "./preview-tzarina-katarina";
import PreviewKostalyn from "./preview-kostalyn";

const Catarina = [CatarinaIcon, CatarinaChoosingIcon]
const Kostaltyn = [KostaltynIcon, KostaltynChoosingIcon]


const PreviewKislevPlayableFactions = () => {

    const CustomIcon = (props: any) => {
        const styles = useStyles();
        const tabProps = useTab(props);
        const isSelected = tabProps["aria-selected"];

        console.log(isSelected);

        return (
            <Box as="button" sx={styles.tab} {...tabProps}>
                <Box as="span" mr="2">
                    {isSelected ?
                        <>
                            <Image src={props.children[1]}/>
                        </>
                        :
                        <>
                            <Image src={props.children[0]}/>
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
                    Kislev: Playable Factions
                </Text>

                <Spacer/>

                <Box marginRight={5}>
                    <Link href={`/comparison`}>
                        <Button width={175} colorScheme={"blackAlpha"}>
                            <Text>
                                Character Comparison
                            </Text>
                        </Button>
                    </Link>
                </Box>
            </Flex>

            <Flex>
                <Tabs variant='unstyled'>
                    <TabList marginLeft={100} marginTop={25}>
                        <CustomIcon>
                            {Catarina}
                        </CustomIcon>
                        <CustomIcon>
                            {Kostaltyn}
                        </CustomIcon>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <PreviewTzarinaKatarina/>
                        </TabPanel>

                        <TabPanel>
                            <PreviewKostalyn/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        </>
    )
}

export default PreviewKislevPlayableFactions