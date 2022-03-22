import {Box, Flex, Image, Stack, Text} from "@chakra-ui/react";
import theNorthemProvinces from "../../../../resources/the-northem-provinces.png";
import corruptionIcon from "../../../../resources/icon/curruption-icon.png";
import leadershipIcon from "../../../../resources/icon/leadrship-icon.png";
import ammunitionIcon from "../../../../resources/icon/ammounition-icon.png";
import upkeepIcon from "../../../../resources/icon/upkeep-icon.png";
import armyIcon from "../../../../resources/icon/army-icon.png";
import yinIcon from "../../../../resources/icon/yin-icon.png";

const PreviewMiaoYing = () => {
    return (
        <div style={{width: '1920px'}}>
            <div style={{margin: 20}}/>
            <Flex>
                <Box width={'50%'}>
                    <Flex marginLeft={125}>
                        <Box>
                            <Image src={theNorthemProvinces} width={125} height={125}/>
                        </Box>

                        <Box marginTop={2}>
                            <Text className={"text"} w={500} h={50} textAlign={"start"} fontSize={35}>
                                Miao Ying, the Storm Dragon
                            </Text>
                            <Text className={"text"} w={300} h={50} textAlign={"start"} marginLeft={1} fontSize={25}>The
                                The Northern Provinces
                            </Text>
                        </Box>
                    </Flex>

                    <Text className={"text"} textAlign={'start'} fontSize={20} marginLeft={125} width={820}>
                        Tzarina Katarin Bokha, the Ice Queen of Kislev, known as one of the most powerful Ice Witches to
                        have ever lived. From the icy fastness of her capital city of Kislev, the Ice Queen rules her
                        land with an aloof majesty. Her power is said to come from the very Motherland itself, its
                        frozen peaks and bleak tundra giving her mastery of Ice Magic.
                    </Text>

                    <Box>
                        <Text className={"text"} textAlign={'start'} fontSize={30} marginLeft={125}>
                            Faction Effects
                        </Text>
                    </Box>

                    <Stack direction={'row'} marginLeft={135} width={500}>
                        <Image src={corruptionIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'}
                              fontSize={16}>
                            Corruption -2
                        </Text>
                    </Stack>

                    <div style={{margin: 10}}/>

                    <Stack direction={'row'} marginLeft={135} width={500}>
                        <Image src={leadershipIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}
                              style={{marginInlineStart: '0.2rem'}}>
                            Leadership: +10% when fighting against Daemons of Chaos
                        </Text>
                    </Stack>

                    <div style={{margin: 10}}/>

                    <Stack direction={'row'} marginLeft={134} width={500}>
                        <Image src={ammunitionIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                            Ammunition: +20% for missing units
                        </Text>
                    </Stack>

                    <Box>
                        <Text className={"text"} textAlign={'start'} fontSize={30} marginLeft={125}>
                            Lord Effects
                        </Text>
                    </Box>

                    <div style={{margin: 10}}/>

                    <Stack direction={'row'} marginLeft={134} width={500}>
                        <Image src={upkeepIcon} width={25} height={25}/>
                        <div style={{position: "absolute", margin: "auto", top: "69.5%", left: "9.75%"}}>
                            <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}
                                  marginBottom={-1}>
                                Upkeep: -50% for missile infantry units
                            </Text>
                            <Stack direction={'row'} width={500}>
                                <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                                    (
                                </Text>
                                <Image src={armyIcon} width={25} height={25} style={{marginInlineStart: '0'}}/>
                                <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}
                                      style={{marginInlineStart: '0.2rem'}}>
                                    Lord's army)
                                </Text>
                            </Stack>
                        </div>
                    </Stack>

                    <div style={{margin: 20}}/>

                    <Stack direction={'row'} marginLeft={135} width={500}>
                        <Image src={yinIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                            Harmony: +3 Yin
                        </Text>
                    </Stack>
                </Box>
                <Box width={'50%'}>
                    GIF
                </Box>
            </Flex>
        </div>
    )
}

export default PreviewMiaoYing;