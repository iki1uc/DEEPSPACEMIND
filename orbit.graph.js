// Orbit Graph (Vorarbeit)

export const ORBIT_GRAPH = {

    hh_alpha(angle) {
        return {
            x: Math.sin(angle) * 200,
            y: Math.cos(angle) * 200
        };
    },

    hh_beta(angle) {
        return {
            x: Math.sin(angle + Math.PI) * 200,
            y: Math.cos(angle + Math.PI) * 200
        };
    },

    center() {
        return { x: 0, y: 0 };
    }
};
