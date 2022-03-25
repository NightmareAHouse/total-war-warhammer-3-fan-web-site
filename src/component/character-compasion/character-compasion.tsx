import {Box, Button, Flex, Link, Select, Spacer, Text} from "@chakra-ui/react";
import {useState} from "react";

const CharacterCompasion = () => {
    const [state, setState] = useState(1)

    const Test = () => {
        if (state === 1) {
            return (
                <>
                    <Text>
                        1
                    </Text>
                </>
            )
        }
        if (state === 2) {
            return (
                <>
                    <Text>
                        2
                    </Text>
                </>
            )
        }
        if (state === 3) {
            return (
                <>
                    <Text>
                        3
                    </Text>
                </>
            )
        }

        return (
            <>
                Something error, please refresh page
            </>
        )
    }

    return (
        <>
            <Flex>
                <Box>
                    <Link href={`/`}>
                        <Button width={175} colorScheme={"blackAlpha"}>
                            <Text className={"button-text"}>
                                Back to main page
                            </Text>
                        </Button>
                    </Link>
                </Box>

                <Spacer/>

                <Text>
                    Character Comparison
                </Text>

                <Spacer/>

                <Box width={175}/>
            </Flex>

            <div style={{margin: 20}}/>

            <Box alignSelf={'center'}>
                <Select width={275} onChange={(e => setState(Number(e.target.value)))}>
                    <option value={1} style={{background: '#1e2022'}}>One comparisons</option>
                    <option value={2} style={{background: '#1e2022'}}>Two comparisons</option>
                    <option value={3} style={{background: '#1e2022'}}>Three comparisons</option>
                </Select>
            </Box>

            <Box>
                <Test/>
            </Box>
        </>
    )
}

export default CharacterCompasion