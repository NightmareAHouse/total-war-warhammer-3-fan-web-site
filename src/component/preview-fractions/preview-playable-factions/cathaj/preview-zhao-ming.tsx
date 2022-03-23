import {Box, Flex, Image, Stack, Text} from '@chakra-ui/react'
import theWesternProvinces from "../../../../resources/fraction-icon/the-western-provinces.png";
import cargoIcon from "../../../../resources/icon/cargo-icon.png";
import magicHeroIcon from "../../../../resources/icon/magic-hero-icon.png"
import upkeepIcon from "../../../../resources/icon/upkeep-icon.png";
import armourIcon from "../../../../resources/icon/armour-icon.png";
import magicItemIcon from "../../../../resources/icon/magic-item-icon.png";
import armyIcon from "../../../../resources/icon/army-icon.png";
import yangIcon from "../../../../resources/icon/yang-icon.png";

const PreviewZhaoMing = () => {
    return (
        <div style={{width: '1880px'}}>
            <div style={{margin: 20}}/>
            <Flex>
                <Box width={'50%'} backgroundColor={'#6b798538'} height={600}>
                    <Flex marginLeft={125}>
                        <Box>
                            <Image src={theWesternProvinces} width={125} height={125}/>
                        </Box>

                        <Box marginTop={2}>
                            <Text className={"text"} w={500} h={50} textAlign={"start"} fontSize={35}>
                                Zhao Ming, the Iron Dragon
                            </Text>
                            <Text className={"text"} w={300} h={50} textAlign={"start"} marginLeft={1} fontSize={25}>
                                The Western Provinces
                            </Text>
                        </Box>
                    </Flex>

                    <Text className={"text"} textAlign={'start'} fontSize={20} marginLeft={125} width={820}>
                        Zhao Ming, the Iron Dragon, rules over Western Cathay and the Sky Road that leads into the
                        Mountains of Mourn. A hardened frontier warrior, he maintains the western edge of the empire and
                        keeps the desert clans in order. An interest in alchemy has led to the presence of sorcerous cabals
                        Zhao Ming's realm, yet his siblings claim that his proximity to the Great Maw might have somehow
                        poisoned his mind...
                    </Text>

                    <Box>
                        <Text className={"text"} textAlign={'start'} fontSize={30} marginLeft={125}>
                            Faction Effects
                        </Text>
                    </Box>

                    <Stack direction={'row'} marginLeft={135} width={500}>
                        <Image src={cargoIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'}
                              fontSize={16}>
                            Maximum cargo capacity: +20% for caravans
                        </Text>
                    </Stack>

                    <div style={{margin: 10}}/>

                    <Stack direction={'row'} marginLeft={135} width={500}>
                        <Image src={magicHeroIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                            Hero recruit rank: +5 for Alchemists
                        </Text>
                    </Stack>

                    <div style={{margin: 10}}/>

                    <Stack direction={'row'} marginLeft={134} width={500}>
                        <Image src={upkeepIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                            Upkeep: -25% for Ogre mercenary units
                        </Text>
                    </Stack>

                    <div style={{margin: 10}}/>

                    <Stack direction={'row'} marginLeft={134} width={500}>
                        <Image src={armourIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                            Armour: +15 for melee units
                        </Text>
                    </Stack>

                    <Box>
                        <Text className={"text"} textAlign={'start'} fontSize={30} marginLeft={125}>
                            Lord Effects
                        </Text>
                    </Box>

                    <Stack direction={'row'} marginLeft={134} width={500}>
                        <Image src={magicItemIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                            Magic item drop chance: +100%
                        </Text>
                    </Stack>

                    <div style={{margin: 10}}/>

                    <Stack direction={'row'} marginLeft={134} width={500}>
                        <Image src={upkeepIcon} width={25} height={25}/>
                        <div style={{position: "absolute", margin: "auto", top: "81%", left: "9.75%"}}>
                            <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}
                                  marginBottom={-1}>
                                Upkeep: -25% for melee units
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
                        <Image src={yangIcon} width={25} height={25}/>
                        <Text className={"text"} textAlign={'start'} textColor={'#95df3f'} fontSize={16}>
                            Harmony: +3 Yang
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

export default PreviewZhaoMing