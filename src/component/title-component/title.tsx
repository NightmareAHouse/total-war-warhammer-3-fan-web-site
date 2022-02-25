import {Box, Flex, Image, Text} from "@chakra-ui/react";
import logo from "../../resources/wh3-logo.png"
import previewGif from "../../resources/title-gif.gif"
import "../../css/header-content.css"

const Title = () => {
    return (
        <article className={"article"}>
            <Image className={"gif-image"} src={previewGif} alt="background"/>
            <Image className={"logo-image"} src={logo} alt={"background"} />
            <h2 className={"header-one"}>Conquer your daemons</h2>
            <h2 className={"header-two"}>Or join to them</h2>
        </article>
    )
}

export default Title