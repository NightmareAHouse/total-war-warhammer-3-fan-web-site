import {Box, Button, Flex, Image, Link, Spacer, Stack, Text} from "@chakra-ui/react";
import scarbrandIcon from "../../../../resources/lord-icon/scarbrand-icon.png";
import exielsOfKhorne from "../../../../resources/fraction-icon/exiels-of-khorne.png";
import casualtyIcon from "../../../../resources/icon/casualty-icon.png";
import diplomaticIcon from "../../../../resources/icon/diplomatic-icon.png";
import movementIcon from "../../../../resources/icon/movement-icon.png";
import recruitmentIcon from "../../../../resources/icon/recuiment-icon.png";
import skarbrandExiledCharacter from "../../../../resources/character/skarbrand-character.png";

const PreviewKhornePlayableFaction = () => {
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
                    Khorne: Playable Factions
                </Text>

                <Spacer/>

                <Box marginRight={5}>
                    <Link href={`/comparison`}>
                        <Button width={175} colorScheme={"blackAlpha"}>
                            <Text className={"button-text"}>
                                Character Comparison
                            </Text>
                        </Button>
                    </Link>
                </Box>
            </Flex>

            <Image marginLeft={145} marginTop={25} width={86} height={115} src={scarbrandIcon}/>

            <div style={{margin: 20}}>
                <Flex>
                    <Box width={'50%'} backgroundColor={'#6b798538'} height={650}>
                        <Flex marginLeft={125}>
                            <Box>
                                <Image src={exielsOfKhorne} width={125} height={125}/>
                            </Box>

                            <Box marginTop={2}>
                                <Text className={"text"} w={500} h={50} textAlign={"start"} fontSize={35}>
                                    Skarbrand the Exiled
                                </Text>
                                <Text className={"text"} w={300} h={50} textAlign={"start"} marginLeft={1}
                                      fontSize={25}>
                                    Exiled of Khorne
                                </Text>
                            </Box>
                        </Flex>

                        <Text className={"text"} textAlign={'start'} fontSize={20} marginLeft={125}>
                            Skarbrand, also known as the Exiled One, was once the greatest of all Khorne's Daemons.
                            Undone
                            by his pride, he was banished from the service of the Blood God and cast from Khorne's
                            domain.
                            Forever tormented by his downfall, Skarbrand wanders the mortal and immortal realms - a
                            restless
                            fury that cannot be stopped!
                        </Text>

                        <Box>
                            <Text className={"text"} textAlign={'start'} fontSize={30} marginLeft={125}>
                                Faction Effects
                            </Text>
                        </Box>

                        <Stack direction={'row'} marginLeft={135} width={500}>
                            <Image src={casualtyIcon} width={25} height={25}/>
                            <Text className={"text"} textAlign={'start'} textColor={'#95df3f'}
                                  fontSize={16}>
                                Armies replenish in foreign territory
                            </Text>
                        </Stack>

                        <div style={{margin: 10}}/>

                        <Stack direction={'row'} marginLeft={135}>
                            <Image src={diplomaticIcon} width={25} height={25}/>
                            <Text className={"text"} textAlign={'start'} textColor={'#d14141'} fontSize={16}>
                                Diplomatic relations: -20 with Khornate factions
                            </Text>
                        </Stack>

                        <div style={{margin: 10}}/>

                        <Stack direction={'row'} marginLeft={134} alignItems={'center'}>
                            <Image src={movementIcon} width={25} height={25}/>
                            <div>
                                <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}
                                      marginBottom={-1}>
                                    Campaign movement range: +25% after razing a settlement
                                </Text>
                                <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                                    (All characters)
                                </Text>
                            </div>
                        </Stack>

                        <Box>
                            <Text className={"text"} textAlign={'start'} fontSize={30} marginLeft={125}>
                                Lord Effects
                            </Text>
                        </Box>

                        <Stack direction={'row'} marginLeft={135}>
                            <Image src={movementIcon} width={25} height={25}/>
                            <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                                Campaign movement range: +35% after winning a battle
                            </Text>
                        </Stack>

                        <div style={{margin: 10}}/>

                        <Stack direction={'row'} marginLeft={134} alignItems={'center'}>
                            <Image src={recruitmentIcon} width={25} height={25}/>
                            <div>
                                <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}
                                      marginBottom={-1}>
                                    Recruitment cost: -35%
                                </Text>
                                <Stack direction={'row'} width={500}>
                                    <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                                        (when in enemy or razed territory)
                                    </Text>
                                </Stack>
                            </div>
                        </Stack>
                    </Box>
                    <Box className={'character-image'} width={'50%'}>
                        <Image src={skarbrandExiledCharacter} height={650}/>
                    </Box>
                </Flex>
            </div>
        </>
    )
}

export default PreviewKhornePlayableFaction