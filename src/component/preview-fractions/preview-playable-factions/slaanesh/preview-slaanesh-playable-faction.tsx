import {Box, Button, Flex, Image, Link, Stack, Text} from "@chakra-ui/react";
import nkariIcon from "../../../../resources/lord-icon/nkari-icon.png";
import seducerOfSlaanesh from "../../../../resources/fraction-icon/seducer-of-slaanesh.png";
import diplomaticIcon from "../../../../resources/icon/diplomatic-icon.png";
import incomeIcon from "../../../../resources/icon/income-icon.png";
import experinceIcon from "../../../../resources/icon/expirence-icon.png";
import seduceIcon from "../../../../resources/icon/seduce-icon.png";
import leadershipIcon from "../../../../resources/icon/leadrship-icon.png";

const PreviewSlaaneshPlayableFaction = () => {
    return(
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
                    Slaanesh: Playable Factions
                </Text>
            </Flex>

            <Image marginLeft={145} marginTop={25} width={86} height={115} src={nkariIcon}/>

            <div style={{width: '1880px'}}>
                <div style={{margin: 20}}/>
                <Flex>
                    <Box width={'50%'} backgroundColor={'#6b798538'} height={600}>
                        <Flex marginLeft={125}>
                            <Box>
                                <Image src={seducerOfSlaanesh} width={125} height={125}/>
                            </Box>

                            <Box marginTop={2}>
                                <Text className={"text"} w={500} h={50} textAlign={"start"} fontSize={35}>
                                    N'Kari
                                </Text>
                                <Text className={"text"} w={300} h={50} textAlign={"start"} marginLeft={1}
                                      fontSize={25}>
                                    Seducers of Slaanesh
                                </Text>
                            </Box>
                        </Flex>

                        <Text className={"text"} textAlign={'start'} fontSize={20} marginLeft={125} width={820}>
                            The Daemon known as N'Kari is a'notorious Keeper of Secrets. As the Arch-tempter, he scours
                            the
                            immortal and mortal realms to experience the ultimate sensation and taste ecstasy in its
                            purest form.
                            Over recent millennia, he has developed a particular hatred for the Elven twins of Ulthuan.
                            Whatever his short-term goals, the next part of N'Kari's plan will surely involve their
                            eternal misery...
                        </Text>

                        <Box>
                            <Text className={"text"} textAlign={'start'} fontSize={30} marginLeft={125}>
                                Faction Effects
                            </Text>
                        </Box>

                        <Stack direction={'row'} marginLeft={135} width={500}>
                            <Image src={diplomaticIcon} width={25} height={25}/>
                            <Text className={"text"} textAlign={'start'} textColor={'#95df3f'}
                                  fontSize={16}>
                                Diplomatic relations: +20 with all faction
                            </Text>
                        </Stack>

                        <div style={{margin: 10}}/>

                        <Stack direction={'row'} marginLeft={134} width={490}>
                            <Image src={incomeIcon} width={25} height={25}/>
                            <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                                Tribute from vassals: +50%
                            </Text>
                        </Stack>

                        <Box>
                            <Text className={"text"} textAlign={'start'} fontSize={30} marginLeft={125}>
                                Lord Effects
                            </Text>
                        </Box>

                        <Stack direction={'row'} marginLeft={134} width={500}>
                            <Image src={experinceIcon} width={25} height={25}/>
                            <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                                Experience gain: +50% each time a new faction is fought in battle
                            </Text>
                        </Stack>

                        <div style={{margin: 10}}/>

                        <Stack direction={'row'} marginLeft={134} width={500}>
                            <Image src={seduceIcon} width={25} height={25}/>
                            <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                                Seduce Units cost: -25%
                            </Text>
                        </Stack>

                        <div style={{margin: 10}}/>

                        <Stack direction={'row'} marginLeft={134} width={500}>
                            <Image src={leadershipIcon} width={25} height={25}/>
                            <div style={{position: "absolute", margin: "auto", top: "69.5%", left: "8.8%"}}>
                                <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}
                                      marginBottom={-1}>
                                    Enemy leadership: -4
                                </Text>
                                <Stack direction={'row'} width={500}>
                                    <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                                        (local region)
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

export default PreviewSlaaneshPlayableFaction