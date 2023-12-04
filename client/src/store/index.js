import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#3d3d3d',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
});

export default state;