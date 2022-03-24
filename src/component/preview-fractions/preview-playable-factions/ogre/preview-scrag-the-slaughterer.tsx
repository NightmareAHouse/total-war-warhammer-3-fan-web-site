import {Box, Flex, Image, Stack, Text} from "@chakra-ui/react";
import disciplesOfTheMaw from "../../../../resources/fraction-icon/disciples-of-the-maw.png";
import movementIcon from "../../../../resources/icon/movement-icon.png";
import magicHeroIcon from "../../../../resources/icon/magic-hero-icon.png";
import casualtyIcon from "../../../../resources/icon/casualty-icon.png";
import upkeepIcon from "../../../../resources/icon/upkeep-icon.png";
import armyIcon from "../../../../resources/icon/army-icon.png";

const PreviewScragTheSlaughterer = () => {
    return(
        <div style={{margin: 20}}>
            <Flex>
                <Box width={'50%'} backgroundColor={'#6b798538'} height={650}>
                    <Flex marginLeft={125}>
                        <Box>
                            <Image src={disciplesOfTheMaw} width={125} height={125}/>
                        </Box>

                        <Box marginTop={2}>
                            <Text className={"text"} w={500} h={50} textAlign={"start"} fontSize={35}>
                                Skrag the Slaughterer
                            </Text>
                            <Text className={"text"} w={300} h={50} textAlign={"start"} marginLeft={1} fontSize={25}>
                                Disciples of the Maw
                            </Text>
                        </Box>
                    </Flex>

                    <Text className={"text"} textAlign={'start'} fontSize={20} marginLeft={125}>
                        Skrag the Slaughterer is the legendary Prophet of the Great Maw, revered by many who see him as
                        the living embodiment of their god. Dragging his massive meat-pot behind him, Skrag seeks out the
                        brutal thrill of battle, hacking and ripping at his enemies in a glorious blood-fuelled dedication to the
                        Great Maw.
                    </Text>

                    <Box>
                        <Text className={"text"} textAlign={'start'} fontSize={30} marginLeft={125}>
                            Faction Effects
                        </Text>
                    </Box>

                    <Stack direction={'row'} marginLeft={135} width={500}>
                        <Image src={movementIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'}
                              fontSize={16}>
                            Campaign movement range: +10%
                        </Text>
                    </Stack>

                    <div style={{margin: 10}}/>

                    <Stack direction={'row'} marginLeft={135} width={500}>
                        <Image src={magicHeroIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                            Hero capacity: +1 for Butchers
                        </Text>
                    </Stack>

                    <div style={{margin: 10}}/>

                    <Stack direction={'row'} marginLeft={134} width={500}>
                        <Image src={magicHeroIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                            Hero recruit rank: +2 for Butchers
                        </Text>
                    </Stack>

                    <Box>
                        <Text className={"text"} textAlign={'start'} fontSize={30} marginLeft={125}>
                            Lord Effects
                        </Text>
                    </Box>

                    <Stack direction={'row'} marginLeft={134} alignItems={'center'}>
                        <Image src={casualtyIcon} width={25} height={25}/>
                        <div>
                            <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}
                                  marginBottom={-1}>
                                Casualty replenishment rate: +8% for Gorgets units
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
                </Box>
                <Box width={'50%'}>
                    GIF
                </Box>
            </Flex>
        </div>
    )
}

export default PreviewScragTheSlaughterer