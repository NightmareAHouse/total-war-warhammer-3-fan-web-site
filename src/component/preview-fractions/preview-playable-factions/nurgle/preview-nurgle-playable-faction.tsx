import {Box, Button, Flex, Image, Link, Spacer, Stack, Text} from "@chakra-ui/react";
import kugatIcon from "../../../../resources/lord-icon/kugat-icon.png";
import poxmakersOfNurgle from "../../../../resources/fraction-icon/poxmakers-of-nurgle.png";
import growthIcon from "../../../../resources/icon/growth-icon.png";
import recruimentsIcon from "../../../../resources/icon/recuiment-icon.png";
import casualtyIcon from "../../../../resources/icon/casualty-icon.png";
import infectionIcon from "../../../../resources/icon/infection-icon.png";
import nurgleCoruptionIcon from "../../../../resources/icon/nurgle-coruption-icon.png";
import plagueIcon from "../../../../resources/icon/plague-icon.png";
import armyIcon from "../../../../resources/icon/army-icon.png";

const PreviewNurglePlayableFaction = () => {
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
                    Nurgle: Playable Factions
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

            <Image marginLeft={145} marginTop={25} width={86} height={115} src={kugatIcon}/>

            <div style={{margin: 20}}>
                <Flex>
                    <Box width={'50%'} backgroundColor={'#6b798538'} height={650}>
                        <Flex marginLeft={125}>
                            <Box>
                                <Image src={poxmakersOfNurgle} width={125} height={125}/>
                            </Box>

                            <Box marginTop={2}>
                                <Text className={"text"} w={500} h={50} textAlign={"start"} fontSize={35}>
                                    Ku'gath Plaguefather
                                </Text>
                                <Text className={"text"} w={300} h={50} textAlign={"start"} marginLeft={1}
                                      fontSize={25}>
                                    Poxmakers of Nurgle
                                </Text>
                            </Box>
                        </Flex>

                        <Text className={"text"} textAlign={'start'} fontSize={20} marginLeft={125}>
                            Ku'gath Plaguefather, the Rotting Poxmaker, is one of the most favoured of Nurgle's chosen.
                            Fascinated by the breeding of new contagions, he frequently forays into the mortal realms to
                            test
                            fresh creations on the battlefield, driven by a desire to concoct the perfect plague capable
                            of infecting
                            even the gods themselves!
                        </Text>

                        <Box>
                            <Text className={"text"} textAlign={'start'} fontSize={30} marginLeft={125}>
                                Faction Effects
                            </Text>
                        </Box>

                        <Stack direction={'row'} marginLeft={135} width={500}>
                            <Image src={growthIcon} width={25} height={25}/>
                            <Text className={"text"} textAlign={'start'} textColor={'#95df3f'}
                                  fontSize={16}>
                                Growth: +10
                            </Text>
                        </Stack>

                        <div style={{margin: 10}}/>

                        <Stack direction={'row'} marginLeft={134} width={490}>
                            <Image src={recruimentsIcon} width={25} height={25}/>
                            <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                                Recruitment cost: -35% for Nurgling units
                            </Text>
                        </Stack>

                        <div style={{margin: 10}}/>

                        <Stack direction={'row'} marginLeft={135} width={500}>
                            <Image src={casualtyIcon} width={25} height={25}/>
                            <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                                Recruitment health: +40% for Nurgling units
                            </Text>
                        </Stack>

                        <Box>
                            <Text className={"text"} textAlign={'start'} fontSize={30} marginLeft={125}>
                                Lord Effects
                            </Text>
                        </Box>

                        <Stack direction={'row'} marginLeft={134} width={500} alignItems={'center'}>
                            <Image src={infectionIcon} width={25} height={25}/>
                            <div>
                                <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}
                                      marginBottom={-1}>
                                    Ambush defence chance: +50%
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
                            <Image src={nurgleCoruptionIcon} width={25} height={25}/>
                            <div>
                                <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}
                                      marginBottom={-1}>
                                    Nurgle corruption: +2
                                </Text>
                                <Stack direction={'row'} width={500}>
                                    <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                                        (local province)
                                    </Text>
                                </Stack>
                            </div>
                        </Stack>

                        <div style={{margin: 10}}/>

                        <Stack direction={'row'} marginLeft={134} width={500} alignItems={'center'}>
                            <Image src={plagueIcon} width={25} height={25}/>
                            <div>
                                <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}
                                      marginBottom={-1}>
                                    Chance of a plague spreading: +15%
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
        </>
    )
}

export default PreviewNurglePlayableFaction