import {Box, Flex, Text, Image, Spacer, Stack, Button, HStack, background} from "@chakra-ui/react"
import theIceCourtIcon from "../../resources/fraction-icon/the-ice-court.png"
import theGreatOrthodoxyIcon from "../../resources/fraction-icon/the-great-orthodoxy.png"
import theNorthProvincesIcon from "../../resources/fraction-icon/the-northem-provinces.png"
import theWesternProvincesIcon from "../../resources/fraction-icon/the-western-provinces.png"
import goldtoothIcon from "../../resources/fraction-icon/goldtooth.png"
import disciplesOfTheMawIcon from "../../resources/fraction-icon/disciples-of-the-maw.png"
import legionOfChaosIcon from "../../resources/fraction-icon/legion-of-chaos.png"
import exilesOfKhorneIcon from "../../resources/fraction-icon/exiels-of-khorne.png"
import oraclesOfTzeenchIcon from "../../resources/fraction-icon/oracles-of-tzeentch.png"
import poxmakersOfNurgleIcon from "../../resources/fraction-icon/poxmakers-of-nurgle.png"
import seducerOfSlaanesh from "../../resources/fraction-icon/seducer-of-slaanesh.png"
import katarinaCharacter from "../../resources/character/katarin-character.png"
import katarinaStats from "../../resources/hero-stats/katarina-stats.png";
import kostaltynCharacter from "../../resources/character/kostaltyn-character.png"
import kostaltynStats from "../../resources/hero-stats/kostaltyn-stats.png";
import kugathCharacter from "../../resources/character/nurgle-character.png";
import kugathStats from "../../resources/hero-stats/kugath-stats.png";
import nkariCharacter from "../../resources/character/slaanesh-character.png";
import nkariStats from "../../resources/hero-stats/nkari-stats.png";
import blankCharacter from "../../resources/character/blank-character.png"
import {CharactersOneComparisonsResult, settingsApi} from "../../api/settings-api";
import "../../css/character-comparisons.content.css"
import {useState} from "react";

type CharacterComparison = {
    heroImage: string,
    heroName: string,
    width: number,
    heroStats: string
}

const tmpCharacter: CharacterComparison = {
    heroImage: blankCharacter,
    heroName: "",
    width: 350,
    heroStats: ""
}

const tmpComparisonData: CharactersOneComparisonsResult = {
    healPoint: 0,
    speed: 0,
    meleeDefence: 0,
    meleeAttack: 0,
    armor: 0,
    chargeBonus: 0,
    leadership: 0,
    weaponStrength: 0
}

const CharactersOneComparisons = () => {
    const [firstCharacterComparison, setFirstCharacterComparison] = useState<CharacterComparison>(tmpCharacter);
    const [secondCharacterComparison, setSecondCharacterComparison] = useState<CharacterComparison>(tmpCharacter);
    const [comparisonData, setComparisonData] = useState<CharactersOneComparisonsResult>(tmpComparisonData);
    const [comparisonIsTrue, setComparisonIsTrue] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    const ChooseLord = (props: {
        icon: string,
        heroIcon: string,
        heroName: string,
        width: number,
        stats: string,
        text: string
    }) => (
        <Box backgroundColor={'#bac4cf1f'} width={130} height={125}
             marginRight={5} borderRadius={5}
             _hover={{bg: '#ffffff38', transform: 'scale(1.1)'}}
             _active={{
                 bg: '#ffffff38',
                 transform: 'scale(0.98)',
             }}
             _focus={{
                 boxShadow:
                     '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
             }}
             onClick={() => {
                 if (firstCharacterComparison.heroImage === blankCharacter) {
                     setFirstCharacterComparison({
                         heroImage: props.heroIcon,
                         width: props.width,
                         heroName: props.heroName,
                         heroStats: props.stats
                     })
                 } else {
                     if (props.heroIcon === firstCharacterComparison.heroImage) {
                         setFirstCharacterComparison({
                             heroImage: blankCharacter,
                             heroName: "",
                             width: 350,
                             heroStats: ""
                         })
                     } else if(props.heroIcon === secondCharacterComparison.heroImage) {
                         setSecondCharacterComparison({
                             heroImage: blankCharacter,
                             heroName: "",
                             width: 350,
                             heroStats: ""
                         })
                     } else {
                         setSecondCharacterComparison({
                             heroImage: props.heroIcon,
                             width: props.width,
                             heroName: props.heroName,
                             heroStats: props.stats
                         })
                     }
                     setIsDisabled(false)
                 }
                 setComparisonIsTrue(false)
             }} cursor={"pointer"}>
            <Box marginTop={1}>
                <Image src={props.icon} margin={'auto'} width={75} height={75}/>
                <Text className={'text'} fontSize={15}>
                    {props.text}
                </Text>
            </Box>
        </Box>
    )

    const comparisons = () => {
        settingsApi
            .test(firstCharacterComparison.heroName, secondCharacterComparison.heroName)
            .then((res => {
                setComparisonData(res)
                setComparisonIsTrue(true);
            }))
    }

    const resetComparisons = () => {
        setFirstCharacterComparison(tmpCharacter)
        setSecondCharacterComparison(tmpCharacter)
        setComparisonData(tmpComparisonData);
        setIsDisabled(true);
        setComparisonIsTrue(false);
    }

    const ComparisonFirstCharacterDataResult = (props: { data: number }) => {
        const {data} = props;

        if ((data) < 0) {
            return (
                <Box backgroundColor={'#861a1a'} height={5} width={47}>
                    <Text fontSize={15}>{(data)}</Text>
                </Box>
            )
        } else if ((data) > 0) {
            return (
                <Box backgroundColor={'#73a90c'} height={5} width={47}>
                    <Text fontSize={15}>{(data)}</Text>
                </Box>
            )
        }

        return (
            <>
                <Box height={5} width={30}/>
            </>
        )
    }

    const ComparisonSecondCharacterDataResult = (props: { data: number }) => {
        const {data} = props

        if ((data * -1) < 0) {
            return (
                <Box backgroundColor={'#861a1a'} height={5} width={47}>
                    <Text fontSize={15}>{(data * -1)}</Text>
                </Box>
            )
        } else if ((data * -1) > 0) {
            return (
                <Box backgroundColor={'#73a90c'} height={5} width={47}>
                    <Text fontSize={15}>{(data * -1)}</Text>
                </Box>
            )
        }

        return (
            <>
                <Box height={5} width={30}/>
            </>
        )
    }

    return (
        <Box width={'100%'} marginTop={25}>
            <Flex>
                <Spacer/>
                <ChooseLord icon={theIceCourtIcon} heroIcon={katarinaCharacter} stats={katarinaStats} width={350}
                            heroName={'TzarinaKatarina'} text={"Tzarina Catarina"}/>
                <ChooseLord icon={theGreatOrthodoxyIcon} heroIcon={kostaltynCharacter} stats={kostaltynStats}
                            width={350} heroName={'Kostaltyn'} text={"Kostaltyn"}/>
                <ChooseLord icon={theNorthProvincesIcon} heroIcon={""} stats={""} width={350}
                            heroName={'MiaoYing'} text={"Miao Ying, " +
                    "the Storm Dragon"}/>
                <ChooseLord icon={theWesternProvincesIcon} heroIcon={""} stats={""} width={350}
                            heroName={'ZhaoMing'} text={"Zhao Ming, " +
                    "the Iron Dragon"}/>
                <ChooseLord icon={goldtoothIcon} heroIcon={""} stats={""} width={350}
                            heroName={'Greasus'} text={"Greasus Goldtooth"}/>
                <ChooseLord icon={disciplesOfTheMawIcon} heroIcon={""} stats={""} width={350}
                            heroName={'Scrag'} text={"Scrag The Slaughter"}/>
                <ChooseLord icon={legionOfChaosIcon} heroIcon={""} stats={""} width={350}
                            heroName={'DaemonPrince'} text={"Daemon Prince"}/>
                <ChooseLord icon={exilesOfKhorneIcon} heroIcon={""} stats={""} width={350}
                            heroName={'Skarbrand'} text={"Skarbrand the Exiled"}/>
                <ChooseLord icon={oraclesOfTzeenchIcon} heroIcon={""} stats={""} width={350}
                            heroName={'Kairos'} text={"Kairos Fateweaver"}/>
                <ChooseLord icon={poxmakersOfNurgleIcon} heroIcon={kugathCharacter} stats={kugathStats} width={350}
                            heroName={'Kugath'} text={"Ku'gat Plaguefather"}/>
                <ChooseLord icon={seducerOfSlaanesh} heroIcon={nkariCharacter} stats={nkariStats} width={500}
                            heroName={'Nkari'} text={"N'Kari"}/>
                <Spacer/>
            </Flex>

            <div style={{margin: 50}}/>

            <Flex>
                <Spacer/>

                <Box width={'40%'}>
                    <Stack direction={'row'}>
                        <Image src={firstCharacterComparison.heroImage} width={firstCharacterComparison.width}
                               height={495}/>
                        <Spacer/>
                        {!comparisonIsTrue ?
                            <>
                                <Image src={firstCharacterComparison.heroStats} height={495}/>
                            </>
                            :
                            <>
                                <HStack>
                                    <Image src={firstCharacterComparison.heroStats} height={495}/>
                                    <Box height={222} style={{margin: 0}}>
                                        <ComparisonFirstCharacterDataResult data={comparisonData.healPoint}/>
                                        <div style={{marginBottom: "55px"}}/>
                                        <ComparisonFirstCharacterDataResult data={comparisonData.armor}/>
                                        <div style={{margin: 1}}/>
                                        <ComparisonFirstCharacterDataResult data={comparisonData.leadership}/>
                                        <div style={{margin: 1}}/>
                                        <ComparisonFirstCharacterDataResult data={comparisonData.speed}/>
                                        <div style={{margin: 1}}/>
                                        <ComparisonFirstCharacterDataResult data={comparisonData.meleeAttack}/>
                                        <div style={{margin: 1}}/>
                                        <ComparisonFirstCharacterDataResult data={comparisonData.meleeDefence}/>
                                        <div style={{margin: 1}}/>
                                        <ComparisonFirstCharacterDataResult data={comparisonData.weaponStrength}/>
                                        <div style={{margin: 1}}/>
                                        <ComparisonFirstCharacterDataResult data={comparisonData.chargeBonus}/>
                                    </Box>
                                </HStack>
                            </>
                        }
                    </Stack>
                </Box>
                <Spacer/>
                <Box width={'40%'}>
                    <Stack direction={'row'}>
                        <Image src={secondCharacterComparison.heroImage} width={secondCharacterComparison.width}
                               height={495}/>
                        <Spacer/>
                        {!comparisonIsTrue ?
                            <>
                                <Image src={secondCharacterComparison.heroStats} height={495}/>
                            </>
                            :
                            <>
                                <HStack>
                                    <Image src={secondCharacterComparison.heroStats} height={495}/>
                                    <Box height={222} style={{margin: 0}}>
                                        <ComparisonSecondCharacterDataResult data={comparisonData.healPoint}/>
                                        <div style={{marginBottom: "55px"}}/>
                                        <ComparisonSecondCharacterDataResult data={comparisonData.armor}/>
                                        <div style={{margin: 1}}/>
                                        <ComparisonSecondCharacterDataResult data={comparisonData.leadership}/>
                                        <div style={{margin: 1}}/>
                                        <ComparisonSecondCharacterDataResult data={comparisonData.speed}/>
                                        <div style={{margin: 1}}/>
                                        <ComparisonSecondCharacterDataResult data={comparisonData.meleeAttack}/>
                                        <div style={{margin: 1}}/>
                                        <ComparisonSecondCharacterDataResult data={comparisonData.meleeDefence}/>
                                        <div style={{margin: 1}}/>
                                        <ComparisonSecondCharacterDataResult data={comparisonData.weaponStrength}/>
                                        <div style={{margin: 1}}/>
                                        <ComparisonSecondCharacterDataResult data={comparisonData.chargeBonus}/>
                                    </Box>
                                </HStack>
                            </>
                        }
                    </Stack>
                </Box>

                <Spacer/>
            </Flex>
            <Box marginTop={50}>
                {!comparisonIsTrue ?
                    <Button backgroundColor={'red'} onClick={comparisons} disabled={isDisabled}>
                        Comparison
                    </Button>
                    :
                    <Button backgroundColor={'red'} onClick={resetComparisons}>
                        Reset Comparison
                    </Button>
                }
            </Box>
        </Box>
    )
}

export default CharactersOneComparisons