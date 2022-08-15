import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function ParticlesContainer(props) {
    const { config } = props;
    const customInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return <Particles options={config} init={customInit} />;
}