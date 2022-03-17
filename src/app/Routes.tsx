import { Switch, Route } from "react-router-dom"
import MainPage from "../page/main-page"
import PreviewKislevPlayableFactions from "../component/preview-fractions/preview-playable-factions/preview-kislev-playable-factions";
import PreviewCathajPlayableFactions
    from "../component/preview-fractions/preview-playable-factions/preview-cathaj-playable-factions";
import PreviewOgrePlayableFactions
    from "../component/preview-fractions/preview-playable-factions/preview-ogre-playable-factions";
import PreviewChaosUndividedPlayableFaction
    from "../component/preview-fractions/preview-playable-factions/preview-chaos-undivided-playable-faction";
import PreviewKhornePlayableFaction
    from "../component/preview-fractions/preview-playable-factions/preview-khorne-playable-faction";
import PreviewTzeentchPlayableFaction
    from "../component/preview-fractions/preview-playable-factions/preview-tzeentch-playable-faction";
import PreviewNurglePlayableFaction
    from "../component/preview-fractions/preview-playable-factions/preview-nurgle-playable-faction";
import PreviewSlaaneshPlayableFaction
    from "../component/preview-fractions/preview-playable-factions/preview-slaanesh-playable-faction";

export const routes = {
    kislev: "/preview/kislev",
    cathaj: "/preview/cathaj",
    ogre: '/preview/ogre',
    chaosUndivaded: '/preview/chaos-undivaded',
    khrone: '/preview/khorne',
    tzeentch: '/preview/tzeentch',
    nurgle: '/preview/nurgle',
    slaanesh: '/preview/slaanesh'
}

export default function Routes() {
    return (
        <Switch>
            <Route path={"/"} exact>
                <MainPage />
            </Route>
            <Route path={routes.kislev}>
                <PreviewKislevPlayableFactions />
            </Route>
            <Route path={routes.cathaj}>
                <PreviewCathajPlayableFactions />
            </Route>
            <Route path={routes.ogre}>
                <PreviewOgrePlayableFactions />
            </Route>
            <Route path={routes.chaosUndivaded}>
                <PreviewChaosUndividedPlayableFaction />
            </Route>
            <Route path={routes.khrone}>
                <PreviewKhornePlayableFaction />
            </Route>
            <Route path={routes.tzeentch}>
                <PreviewTzeentchPlayableFaction />
            </Route>
            <Route path={routes.nurgle}>
                <PreviewNurglePlayableFaction />
            </Route>
            <Route path={routes.slaanesh}>
                <PreviewSlaaneshPlayableFaction />
            </Route>
        </Switch>
    )
}