import {axiosInstance} from "./axios-instace";

export type CharactersOneComparisonsResult = {
    healPoint: number,
    armor: number,
    leadership: number,
    speed: number,
    meleeAttack: number,
    meleeDefence: number,
    weaponStrength: number,
    chargeBonus: number
}

export const settingsApi = {
    test: async (character1: string, character2: string) => {
        const response = await axiosInstance.get<CharactersOneComparisonsResult>
        (`/characters-one-comparisons?character1=${character1}&character2=${character2}`)

        return response.data;
    }
}