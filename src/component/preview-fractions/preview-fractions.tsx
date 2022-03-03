import {Box, Flex, HStack, Icon, Image, Text} from "@chakra-ui/react"
import "../../css/preview-faction.content.css"
import kislev from "../../resources/kislev.jpg"
import cathaj from "../../resources/cathaj.jpg"
import ogreKingdoms from "../../resources/ogre-kingdoms.jpg"
import daemonsOfChaos from "../../resources/chaos-undivaded.jpg"
import khorne from "../../resources/khorne.jpg"
import tzeentch from "../../resources/tzeentch.jpg"
import nurgle from "../../resources/nurgle.jpg"
import slaanesh from "../../resources/slaanesh.jpg"
import {useState} from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"

type previewFractionsType = {
    index: number,
    background: string,
    videoUrl: string,
    text: string,
    textColor: string
}

const previewFractionsDefault: previewFractionsType[] = [{
    index: 0,
    background: kislev,
    videoUrl: "https://www.youtube.com/embed/Bxe4C2kX_mU",
    text: `The Tzardom of Kislev, known contemporarily as the Realm of the Ice Queen,and to the Kislevites themselves as 
        The Motherland, is the most northerly Human civilisation within the Old World, a powerful and war-driven nation 
        that is known far and wide for having some of the greatest horsemen to ever roam the plains of the southern realms. 
        Ruled by a mighty Tzar, Kislev is a nation born from the saddle, their peoples ancestry being traced to the mighty 
        horse-warriors of the Eastern Steppes many millennia ago.`,
    textColor: "#71bbcfd6"
}, {
    index: 1,
    background: cathaj,
    videoUrl: "https://www.youtube.com/embed/WrX1aGHK1lM",
    text: `Grand Cathay is a populous nation of humans located in the Far East, beyond the Dark Lands and the
        Mountains of Mourn. To the north, with the Great Bastion as border, lie the Eastern Steppes and
        the Hung and Kurgan territories within the Chaos Wastes. To the east are the island realm of Nippon
        and the Far Sea, and beyond that the Boiling Sea and Naggaroth. To the south are the Kingdoms of Ind
        and the Hinterlands of Khuresh.`,
    textColor: "#e3653ae6"
}, {
    index: 2,
    background: ogreKingdoms,
    videoUrl: "https://www.youtube.com/embed/4Xj30Wm0YDQ",
    text: `The Ogre Kingdoms are the rightful and sovereign domain of the large and brutish Ogre race.
        Wandering tribes of Ogres can be found wrecking their way across the globe, erecting many strongholds and
        plundering far off and exotic lands the likes of which no man will ever see in their lifetime.
        Yet no matter how far away they may be, all Ogres refer to the scattered tribal kingdoms that dominate the
        slopes and river valleys of the Mountains of Mourn their rightful, hard-earned homeland.`,
    textColor: "#e54545"
}, {
    index: 3,
    background: daemonsOfChaos,
    videoUrl: "https://www.youtube.com/embed/Uebto73ZUFQ",
    text: `The Daemons of Chaos, known also as the Legions of Chaos, the Arch-Enemy, the Great Beast, or simply just
        Daemons are malevolent, other wordly entities born from the deepest 
        and darkest emotions of all mortal creatures. From their fortresses and palaces within this Realm of Chaos, these 
        entities watch with envious eyes towards the mortal kingdoms, waiting with unblinking patience for their chance to 
        wreak destruction and dismay upon the world and to feed upon the misery that they have wrought.`,
    textColor: "#4fa2e5d4"
}, {
    index: 4,
    background: khorne,
    videoUrl: "https://www.youtube.com/embed/Ur05W5lxzAM",
    text: `Khorne, the "Blood God" is the major Chaos God of war, hatred, wrath, rage, murder, blood, strength, courage
        and martial honour. Khorne is the second eldest of the major Ruinous Powers and his waxing strength 
        in this time of constant conflict often renders him the mightiest of the Chaos Gods in his effect on the world. 
        His domain encompasses the most basic and brutal of sentient emotions - hate, anger, rage, the desire for 
        destruction and the joy of killing one's enemies.`,
    textColor: "#f5771ed9"
}, {
    index: 5,
    background: tzeentch,
    videoUrl: "https://www.youtube.com/embed/52zuk_GcGUI",
    text: `Tzeentch, the Changer of Ways and the Great Conspirator is the Chaos God of Magic, Change, Evolution,
        Destiny, Lies and Trickery.
        Though weary scholars of Daemon lore know this god by the name of Tzeentch, in truth, he exceeds all the
        other Ruinous Powers in his number of facets and aspects. For he is change, said to embody every mortal
        creature's recognition of, and desire to, change. His face and form shifts and turns from eternity
        unto eternity.`,
    textColor: "#3dbccfe0"
}, {
    index: 6,
    background: nurgle,
    videoUrl: "https://www.youtube.com/embed/oGf5q_4Jxhs",
    text: `Nurgle, the "Plague Lord," is the Chaos God of disease, decay, despair, 
        destruction, death and rebirth. He is the Chaos God most directly involved with the plight of mortals, particularly 
        Men, who suffer so acutely from a fear of death. He is the eldest of the four Chaos Gods and indeed is undoubtedly 
        the oldest Chaos God of all, for the process of death and decay is as ancient as life itself. Nurgle is the 
        embodiment of the constant cycle of death and rebirth which animates all life in the universe.`,
    textColor: "#5bef2ad9"
}, {
    index: 7,
    background: slaanesh,
    videoUrl: "https://www.youtube.com/embed/XqjZzwAg3dU",
    text: `Slaanesh, the Dark Prince, is the Chaos God of Pleasure, Passion, Excess and Decadence. Slaanesh is the the Dark God 
        dedicated to the pursuit of earthly gratification and the overthrow of all decent behaviour, as well as hedonism 
        and amoral pleasure for its own sake. He is the God of Obsession, the Master of Excess in All Things, from gluttony 
        to lust to megalomania. Out of all the pantheon, Slaanesh is the youngest of the Chaos Gods, for the complex 
        emotions of erotic desire and decadence can only exist within the minds of intelligent races.`,
    textColor: "#e32579cf"
}]
const buttonsColorDefault = ['#41474c', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'];

const PreviewFactions = () => {
    const [previewFraction, setPreviewFraction] = useState(previewFractionsDefault[0]);
    const [buttonsColor, setButtonsColor] = useState(buttonsColorDefault)

    const onClick = (value: number) => {
        setPreviewFraction(previewFractionsDefault[value])

        let newArr = [...buttonsColor];
        newArr.map((e, index) => {
            if (index === value) {
                newArr[index] = '#41474c'
            } else {
                newArr[index] = '#ffffff'
            }
            return newArr;
        })
        setButtonsColor(newArr)
    }

    const forwardToNextFraction = () => {
        if(previewFraction.index !== 7) {
            onClick(previewFraction.index + 1)
        } else {
            onClick(0)
        }
    }

    const forwardToPreviousFraction = () => {
        if(previewFraction.index !== 0) {
            onClick(previewFraction.index - 1)
        } else {
            onClick(7)
        }
    }

    const CircleIcon = (props: any) => {
        return (
            <Icon viewBox='0 0 200 200' {...props} onClick={() => onClick(props.value)} _hover={{
                color: "#41474c",
            }} cursor={"pointer"}>
                <path
                    fill='currentColor'
                    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                />
            </Icon>
        )
    }

    return (
        <Box style={{height: 1077, position: 'relative', overflow: "hidden"}}>
            <Image className={"gif-image"} src={previewFraction.background} alt="background"/>
            <Flex className={"preview"}>
                <Box marginTop={200} marginRight={275}>
                    <ArrowBackIcon cursor={"pointer"} w={50} h={50} color={previewFraction.textColor}
                                   onClick={forwardToPreviousFraction} />
                </Box>
                <Box marginRight={10}>
                    <article>
                        <iframe title={"fraction-preview-video"} width="600" height="400" src={previewFraction.videoUrl}
                                frameBorder="0"/>
                    </article>
                </Box>
                <Box marginLeft={10} marginRight={10}>
                    <Text width={850} className={"text"} textAlign={"left"} fontWeight={"bold"}
                          color={previewFraction.textColor} margin={0}>
                        {previewFraction.text}
                    </Text>
                </Box>
                <Box marginTop={200}>
                    <ArrowForwardIcon cursor={"pointer"} w={50} h={50} color={previewFraction.textColor}
                                      onClick={forwardToNextFraction}/>
                </Box>
            </Flex>
            <Box marginTop={125}>
                <HStack className={"buttons"}>
                    <CircleIcon value={0} boxSize={20} color={buttonsColor[0]}/>
                    <CircleIcon value={1} boxSize={20} color={buttonsColor[1]}/>
                    <CircleIcon value={2} boxSize={20} color={buttonsColor[2]}/>
                    <CircleIcon value={3} boxSize={20} color={buttonsColor[3]}/>
                    <CircleIcon value={4} boxSize={20} color={buttonsColor[4]}/>
                    <CircleIcon value={5} boxSize={20} color={buttonsColor[5]}/>
                    <CircleIcon value={6} boxSize={20} color={buttonsColor[6]}/>
                    <CircleIcon value={7} boxSize={20} color={buttonsColor[7]}/>
                </HStack>
            </Box>
        </Box>
    )
}

export default PreviewFactions