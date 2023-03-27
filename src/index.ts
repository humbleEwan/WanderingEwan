'use strict';

import './css/cancer.css'

import { PLayer } from "./actors/enities/player";
import { Skeleton } from "./actors/enities/skeleton";
import { instance } from "./gameInstance";
import { Boss } from './actors/enities/boss';

let player: PLayer;

window.onload = () => {
    instance.setupMap();

    player = new PLayer(instance.findPlayerStartLocation());
    instance.createNewEntity(player);
    instance.playerReference = player;

    instance.setup();
};
// Function to handle the key press events
function onKeyPress(event: any) {
    if (!instance.hasGameEnded) {
        if (player.handleInput(event.keyCode)) {

            if (!instance.isInCombat) {
                for (let i = 0; i < 100; ++i) {
                    for (let j = 0; j < 100; ++j) {
                        if (instance.getMapTileAtLocation([i, j]) === 0 && Math.random() > 0.999 && !instance.isOccupiedByEntity([i, j])) {
                            instance.createNewEntity(new Skeleton([i, j]));
                        }
                    }
                }
            }

            instance.proceedTurn();
        }
    }

}

// Listen on pressing the keys
document.body.addEventListener('keydown', onKeyPress);
