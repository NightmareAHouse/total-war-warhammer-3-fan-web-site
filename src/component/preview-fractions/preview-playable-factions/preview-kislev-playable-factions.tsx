import {Text, Box, Image, Flex, Stack} from "@chakra-ui/react";
import theIceCourt from "../../../resources/the-ice-court.png"
import "../../../css/preview-playable-faction.content.css"
import devotionIcon from '../../../resources/icon/devotion-icon.png';
import heroIcon from '../../../resources/icon/hero-icon.png';
import controlIcon from "../../../resources/icon/control-icon.png"
import magicIcon from "../../../resources/icon/magic-icon.png"
import durationIcon from "../../../resources/icon/duration-icon.png"

const PreviewKislevPlayableFactions = () => {
    return (
        <>
            <Text className={"text"}>
                Kislev: Playable Factions
            </Text>
            <div style={{margin: 20}}/>
            <Flex>
                <Box width={'50%'}>
                    <Flex marginLeft={125}>
                        <Box>
                            <Image src={theIceCourt} width={125} height={125}/>
                        </Box>

                        <Box marginTop={2}>
                            <Text className={"text"} w={225} h={50} textAlign={"start"} fontSize={35}>Tzarina
                                Katarin</Text>
                            <Text className={"text"} w={225} h={50} textAlign={"start"} marginLeft={1} fontSize={25}>The
                                Ice Court</Text>
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
                        <Image src={devotionIcon} />
                        <Text className={"text"} textAlign={'start'}  textColor={'#95df3f'}
                              fontSize={16}>
                            Devotion generated: 10 from successful Frost Maiden
                        </Text>
                        <Image src={heroIcon}/>
                        <Text className={"text"} textAlign={'start'}  textColor={'#95df3f'} fontSize={16}
                              style={{marginInlineStart: '0.2rem'}} >
                            Hero actions
                        </Text>
                    </Stack>

                    <div style={{margin: 10}} />

                    <Stack direction={'row'} marginLeft={135} width={100}>
                        <Image src={controlIcon} />
                        <Text className={"text"} textAlign={'start'}  textColor={'#95df3f'} fontSize={16}>
                            Control +6
                        </Text>
                    </Stack>

                    <div style={{margin: 10}} />

                    <Stack direction={'row'} marginLeft={135} width={285}>
                        <Image src={magicIcon} />
                        <Text className={"text"} textAlign={'start'}  textColor={'#95df3f'} fontSize={16}>
                            Hero recruit rank: +3 for Frost Maidens
                        </Text>
                    </Stack>

                    <div style={{margin: 10}} />

                    <Stack direction={'row'} marginLeft={135} width={255}>
                        <Image src={durationIcon} />
                        <Text className={"text"} textAlign={'start'}  textColor={'#95df3f'} fontSize={16}>
                            Ice court training duration: -2 turns
                        </Text>
                    </Stack>

                    <Box>
                        <Text className={"text"} textAlign={'start'} fontSize={30} marginLeft={125}>
                            Lord Effects
                        </Text>
                    </Box>

                    <div style={{margin: 10}} />

                    <Stack>

                    </Stack>
                </Box>
                <Box width={'50%'}>
                    GIF
                </Box>
            </Flex>
        </>
    )
}

export default PreviewKislevPlayableFactions