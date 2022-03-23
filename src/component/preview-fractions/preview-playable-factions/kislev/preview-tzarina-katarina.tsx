import {Box, Flex, Image, Stack, Text} from "@chakra-ui/react";
import theIceCourt from "../../../../resources/fraction-icon/the-ice-court.png";
import devotionIcon from "../../../../resources/icon/devotion-icon.png";
import heroIcon from "../../../../resources/icon/hero-icon.png";
import controlIcon from "../../../../resources/icon/control-icon.png";
import magicIcon from "../../../../resources/icon/magic-icon.png";
import durationIcon from "../../../../resources/icon/duration-icon.png";
import corruptionIcon from "../../../../resources/icon/curruption-icon.png";
import upkeepIcon from "../../../../resources/icon/upkeep-icon.png";
import armyIcon from "../../../../resources/icon/army-icon.png";
import miscastIcon from "../../../../resources/icon/miscast-icon.png";

const PreviewTzarinaKatarina = () => {
    return (
        <div style={{width: '1888px'}}>
            <div style={{margin: 20}}/>
            <Flex>
                <Box width={'50%'}>
                    <Flex marginLeft={125}>
                        <Box>
                            <Image src={theIceCourt} width={125} height={125}/>
                        </Box>

                        <Box marginTop={2}>
                            <Text className={"text"} w={225} h={50} textAlign={"start"} fontSize={35}>Tzarina
                                Katarin
                            </Text>
                            <Text className={"text"} w={225} h={50} textAlign={"start"} marginLeft={1} fontSize={25}>The
                                Ice Court
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
                        <Image src={devotionIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'}
                              fontSize={16}>
                            Devotion generated: 10 from successful Frost Maiden
                        </Text>
                        <Image src={heroIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}
                              style={{marginInlineStart: '0.2rem'}}>
                            Hero actions
                        </Text>
                    </Stack>

                    <div style={{margin: 10}}/>

                    <Stack direction={'row'} marginLeft={134} width={150}>
                        <Image src={controlIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                            Control +6
                        </Text>
                    </Stack>

                    <div style={{margin: 10}}/>

                    <Stack direction={'row'} marginLeft={134} width={300}>
                        <Image src={magicIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                            Hero recruit rank: +3 for Frost Maidens
                        </Text>
                    </Stack>


                    <Stack direction={'row'} marginLeft={134} width={270}>
                        <Image src={durationIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                            Ice court training duration: -2 turns
                        </Text>
                    </Stack>

                    <Box>
                        <Text className={"text"} textAlign={'start'} fontSize={30} marginLeft={125}>
                            Lord Effects
                        </Text>
                    </Box>

                    <Stack direction={'row'} marginLeft={134} width={500}>
                        <Image src={corruptionIcon} width={25} height={25}/>
                        <div style={{position: "absolute", margin: "auto", top: "73%", left: "9.75%"}}>
                            <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}
                                  marginBottom={-1}>
                                Corruption -6
                            </Text>
                            <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                                (local province)
                            </Text>
                        </div>
                    </Stack>

                    <div style={{margin: 10}}/>

                    <Stack direction={'row'} marginLeft={134} width={500}>
                        <Image src={upkeepIcon} width={25} height={25}/>
                        <div style={{position: "absolute", margin: "auto", top: "77%", left: "9.75%"}}>
                            <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}
                                  marginBottom={-1}>
                                Upkeep: -50% for Ice Guard units
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

                    <div style={{margin: 10}}/>

                    <Stack direction={'row'} marginLeft={135} width={500}>
                        <Image src={miscastIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                            Miscast base chance: -50%
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

export default PreviewTzarinaKatarina;