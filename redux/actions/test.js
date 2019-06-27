import { Toggle } from "../types";

function toggleAction (toggle) {
    return (dispach ) => {
        dispach({ type:Toggle, payload: !toggle})
    }
}

export { toggleAction };