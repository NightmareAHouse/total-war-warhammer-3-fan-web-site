import {Box, Flex, Image, Stack, Text} from "@chakra-ui/react";
import theGreatOrthodoxy from "../../../../resources/fraction-icon/the-great-orthodoxy.png";
import diplomaticIcon from "../../../../resources/icon/diplomatic-icon.png"
import theIceCourt from "../../../../resources/fraction-icon/the-ice-court.png"
import devotionIcon from "../../../../resources/icon/devotion-icon.png";
import heroIcon from "../../../../resources/icon/hero-icon.png";
import wardIcon from "../../../../resources/icon/ward-icon.png";
import meleeIcon from "../../../../resources/icon/melee-icon.png";
import leadershipIcon from "../../../../resources/icon/leadrship-icon.png";
import woundIcon from "../../../../resources/icon/wound-icon.png";
import frenzyIcon from "../../../../resources/icon/freenzy-icon.png";
import armyIcon from "../../../../resources/icon/army-icon.png";

const PreviewKostalyn = () => {
    return (
        <div style={{margin: 20}}>
            <Flex>
                <Box width={'50%'} backgroundColor={'#6b798538'} height={650}>
                    <Flex marginLeft={125}>
                        <Box>
                            <Image src={theGreatOrthodoxy} width={125} height={125}/>
                        </Box>

                        <Box marginTop={2}>
                            <Text className={"text"} w={500} h={50} textAlign={"start"} fontSize={35}>
                                Kostaltyn
                            </Text>
                            <Text className={"text"} w={300} h={50} textAlign={"start"} marginLeft={1} fontSize={25}>
                                The Great Orthodoxy
                            </Text>
                        </Box>
                    </Flex>

                    <Text className={"text"} textAlign={'start'} fontSize={20} marginLeft={125}>
                        As supreme patriarch of the Ursunite faith, Kostaltyn is one of the most powerful spiritual
                        leaders in
                        Kislev. Wild and unkempt in appearance, he is a howling, angry firebrand on the battlefield,
                        urging
                        his devoted followers onwards to fight and die in the name of the Great Bear.
                    </Text>

                    <Box>
                        <Text className={"text"} textAlign={'start'} fontSize={30} marginLeft={125}>
                            Faction Effects
                        </Text>
                    </Box>

                    <Stack direction={'row'} marginLeft={135}>
                        <Image src={diplomaticIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#d14141'}
                              fontSize={16}>
                            Diplomatic Relation: -40 with the faction
                        </Text>
                        <Image src={theIceCourt} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#d14141'} fontSize={16}
                              style={{marginInlineStart: '0.2rem'}}>
                            The Ice Court
                        </Text>
                    </Stack>

                    <div style={{margin: 10}}/>

                    <Stack direction={'row'} marginLeft={134}>
                        <Image src={devotionIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'}
                              fontSize={16}>
                            Devotion generated: 10 from successful Patriarch
                        </Text>
                        <Image src={heroIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}
                              style={{marginInlineStart: '0.2rem'}}>
                            Hero actions
                        </Text>
                    </Stack>

                    <div style={{margin: 10}}/>

                    <Stack direction={'row'} marginLeft={134} width={300}>
                        <Image src={wardIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                            Ward Save: 20% for embedded Patriarch
                        </Text>
                    </Stack>

                    <div style={{margin: 10}}/>

                    <Stack direction={'row'} marginLeft={134}>
                        <Image src={meleeIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                            Melee attack: +5 for Kossars, Kossovite Dervishes and Horse Archer unit
                        </Text>
                    </Stack>

                    <div style={{margin: 10}}/>

                    <Stack direction={'row'} marginLeft={134}>
                        <Image src={leadershipIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                            Leadership: +5 for Kossars, Kossovite Dervishes and Horse Archer unit
                        </Text>
                    </Stack>

                    <Box>
                        <Text className={"text"} textAlign={'start'} fontSize={30} marginLeft={125}>
                            Lord Effects
                        </Text>
                    </Box>

                    <Stack direction={'row'} marginLeft={134} width={500}>
                        <Image src={woundIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}
                              marginBottom={-1}>
                            Wound recovery time -2
                        </Text>
                    </Stack>

                    <div style={{margin: 10}}/>

                    <Stack direction={'row'} marginLeft={134} width={500} alignItems={'center'}>
                        <Image src={frenzyIcon} width={25} height={25}/>
                        <div>
                            <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}
                                  marginBottom={-1}>
                                Passive ability: "Frenzy"
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

export default PreviewKostalyn