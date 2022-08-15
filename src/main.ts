import { SkyRouter } from "skydapp-common";
import Wallet from "./network/Wallet";
import Home from "./view/Home";

(async () => {
    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }

    SkyRouter.route("", Home);

    if (await Wallet.connected() !== true) {
        await Wallet.connect();
    }
})();