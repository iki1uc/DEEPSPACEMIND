// DEEPSPACEMIND · CORE ENGINE (Vorarbeit)

import { CONNECTOR } from "../81/hyper/connector.js";

export const DEEPSPACEMIND_CORE = {

    init() {
        return CONNECTOR.init();
    },

    pulse(input) {
        return CONNECTOR.pulse(input);
    },

    semantik(input) {
        return CONNECTOR.semantik(input);
    },

    intention(cmd) {
        return CONNECTOR.intention(cmd);
    },

    meta(metaInput) {
        return CONNECTOR.meta(metaInput);
    },

    vector(x, y, z) {
        return CONNECTOR.vector(x, y, z);
    },

    full(input) {
        return CONNECTOR.full(input);
    }
};
