import {Box, Button, Flex, Image, Link, Spacer, Stack, Text} from "@chakra-ui/react";
import kairosIcon from "../../../../resources/lord-icon/cairos-icon.png";
import oraclesOfTzeentch from "../../../../resources/fraction-icon/oracles-of-tzeentch.png";
import reinforcedIcon from "../../../../resources/icon/reinforced-icon.png";
import heroActionIcon from "../../../../resources/icon/hero-action-icon.png";
import miscastIcon from "../../../../resources/icon/miscast-icon.png";
import ambushIcon from "../../../../resources/icon/ambush-icon.png"
import armyIcon from "../../../../resources/icon/army-icon.png";

const PreviewTzeentchPlayableFaction = () => {
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
                    Tzeentch: Playable Factions
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

            <Image marginLeft={145} marginTop={25} width={86} height={115} src={kairosIcon}/>

            <div style={{margin: 20}}>
                <Flex>
                    <Box width={'50%'} backgroundColor={'#6b798538'} height={650}>
                        <Flex marginLeft={125}>
                            <Box>
                                <Image src={oraclesOfTzeentch} width={125} height={125}/>
                            </Box>

                            <Box marginTop={2}>
                                <Text className={"text"} w={500} h={50} textAlign={"start"} fontSize={35}>
                                    Kairos Fateweaver
                                </Text>
                                <Text className={"text"} w={300} h={50} textAlign={"start"} marginLeft={1}
                                      fontSize={25}>
                                    Oracles of Tzeentch
                                </Text>
                            </Box>
                        </Flex>

                        <Text className={"text"} textAlign={'start'} fontSize={20} marginLeft={125}>
                            Overtyrant Greasus Goldtooth is the fattest and most powerful Ogre Tyrant of all the Ogre
                            Kingdoms. A master of bribery, the Overtyrant has always used his considerable wealth as a
                            way to
                            inspire greed and confusion amongst his enemies. Yet Greasus rampant success has not
                            diminished
                            his greed or his all-consuming desire to conquer everything he sees
                        </Text>

                        <Box>
                            <Text className={"text"} textAlign={'start'} fontSize={30} marginLeft={125}>
                                Faction Effects
                            </Text>
                        </Box>

                        <Stack direction={'row'} marginLeft={135}>
                            <Image src={reinforcedIcon} width={25} height={25}/>
                            <Text className={"text"} textAlign={'start'} textColor={'#95df3f'}
                                  fontSize={16}>
                                Enemy reinforcement time prediction accuracy: +100%
                            </Text>
                        </Stack>

                        <div style={{margin: 10}}/>

                        <Stack direction={'row'} marginLeft={134} width={490}>
                            <Image src={reinforcedIcon} width={25} height={25}/>
                            <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                                Battle reinforcement time: -50%
                            </Text>
                        </Stack>

                        <div style={{margin: 10}}/>

                        <Stack direction={'row'} marginLeft={135} width={500} alignItems={'center'}>
                            <Image src={heroActionIcon} width={25} height={25}/>
                            <div>
                                <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}
                                      marginBottom={-1}>
                                    Hero action success chance: +15%
                                </Text>
                                <Stack direction={'row'} width={500}>
                                    <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                                        (all characters)
                                    </Text>
                                </Stack>
                            </div>
                        </Stack>

                        <Box>
                            <Text className={"text"} textAlign={'start'} fontSize={30} marginLeft={125}>
                                Lord Effects
                            </Text>
                        </Box>

                        <Stack direction={'row'} marginLeft={135}>
                            <Image src={miscastIcon} width={25} height={25}/>
                            <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                                Can unlock unique items that can be used to customise Kairos' spell selection
                            </Text>
                        </Stack>

                        <div style={{margin: 10}}/>

                        <Stack direction={'row'} marginLeft={135} width={500}>
                            <Image src={heroActionIcon} width={25} height={25}/>
                            <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                                Enemy Hero action success chance: -50%
                            </Text>
                        </Stack>

                        <div style={{margin: 10}}/>

                        <Stack direction={'row'} marginLeft={134} width={500} alignItems={'center'}>
                            <Image src={ambushIcon} width={25} height={25}/>
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
                    </Box>
                    <Box width={'50%'}>
                        GIF
                    </Box>
                </Flex>
            </div>
        </>
    )
}

export default PreviewTzeentchPlayableFaction