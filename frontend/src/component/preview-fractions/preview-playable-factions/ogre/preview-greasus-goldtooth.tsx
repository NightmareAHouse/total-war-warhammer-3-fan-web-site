import {Box, Flex, Image, Stack, Text} from "@chakra-ui/react";
import goldtooth from "../../../../resources/fraction-icon/goldtooth.png";
import diplomaticIcon from "../../../../resources/icon/diplomatic-icon.png";
import incomeIcon from "../../../../resources/icon/income-icon.png";
import massIcon from "../../../../resources/icon/mass-icon.png";
import upkeepIcon from "../../../../resources/icon/upkeep-icon.png";
import armyIcon from "../../../../resources/icon/army-icon.png";
import greasusGoldtoothCharacter from "../../../../resources/character/greasus-character.png";

const PreviewGreasusGoldtooth = () => {
    return (
        <div style={{margin: 20}}>
            <Flex>
                <Box width={'50%'} backgroundColor={'#6b798538'} height={650}>
                    <Flex marginLeft={125}>
                        <Box>
                            <Image src={goldtooth} width={125} height={125}/>
                        </Box>

                        <Box marginTop={2}>
                            <Text className={"text"} w={500} h={50} textAlign={"start"} fontSize={35}>
                                Greasus Goldtooth
                            </Text>
                            <Text className={"text"} w={300} h={50} textAlign={"start"} marginLeft={1} fontSize={25}>
                                Goldtooth
                            </Text>
                        </Box>
                    </Flex>

                    <Text className={"text"} textAlign={'start'} fontSize={20} marginLeft={125}>
                        Overtyrant Greasus Goldtooth is the fattest and most powerful Ogre Tyrant of all the Ogre
                        Kingdoms. A master of bribery, the Overtyrant has always used his considerable wealth as a way
                        to
                        inspire greed and confusion amongst his enemies. Yet Greasus rampant success has not diminished
                        his greed or his all-consuming desire to conquer everything he sees
                    </Text>

                    <Box>
                        <Text className={"text"} textAlign={'start'} fontSize={30} marginLeft={125}>
                            Faction Effects
                        </Text>
                    </Box>

                    <Stack direction={'row'} marginLeft={135}>
                        <Image src={diplomaticIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'}
                              fontSize={16}>
                            Diplomatic relations: +20 with Ogre Kingdoms
                        </Text>
                    </Stack>

                    <div style={{margin: 10}}/>

                    <Stack direction={'row'} marginLeft={135} width={500}>
                        <Image src={incomeIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                            Income from trade: +25%
                        </Text>
                    </Stack>

                    <div style={{margin: 10}}/>

                    <Stack direction={'row'} marginLeft={134} width={500}>
                        <Image src={massIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                            Unit mass: +25%
                        </Text>
                    </Stack>

                    <Box>
                        <Text className={"text"} textAlign={'start'} fontSize={30} marginLeft={125}>
                            Lord Effects
                        </Text>
                    </Box>

                    <Stack direction={'row'} marginLeft={134} width={500} alignItems={'center'}>
                        <Image src={incomeIcon} width={25} height={25}/>
                        <div>
                            <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}
                                  marginBottom={-1}>
                                Income from raiding: +50%
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

                    <Stack direction={'row'} marginLeft={134} width={500} alignItems={'center'}>
                        <Image src={upkeepIcon} width={25} height={25}/>
                        <div>
                            <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}
                                  marginBottom={-1}>
                                Upkeep: -50% for Ironguts units
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

                    <Stack direction={'row'} marginLeft={134} alignItems={'center'}>
                        <Image src={incomeIcon} width={25} height={25}/>
                        <div>
                            <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}
                                  marginBottom={-1}>
                                Income from sacking and looting settlements: +50%
                            </Text>
                            <Stack direction={'row'}>
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
                </Box>
                <Box className={'character-image'} width={'50%'}>
                    <Image src={greasusGoldtoothCharacter} height={650}/>
                </Box>
            </Flex>
        </div>
    )
}

export default PreviewGreasusGoldtooth