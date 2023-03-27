import { instance } from "../../gameInstance";
import { faceDirection } from "../../map/pathfinding";
import { loader } from "../../rendering/Loader";
import { Entity } from "./Entity";

export class Boss extends Entity{
    public constructor(startLocation: number[]){
        super(true, startLocation,  Math.floor(Math.random() * instance.playerReference.getScore()) + 10);
    }

    public executeBehaviour(): void {
        if(instance.isInCombat && this.isInCombet){
            if(this._HP <= 0){
                instance.deleteEntity(this);
                instance.isInCombat = false;
                instance.playerReference.addScore(1);
            } else if(Math.random() > 0.6){
                //Attack player
            }
        } else {
            this.move(faceDirection(instance.getMap(), this._location, instance.playerReference.getLocation()));
        }
    }

    protected loadSprites(): void {
        this._spriteList.push(loader.getAssetByID(7));
        this._spriteList.push(loader.getAssetByID(15));
        this._spriteList.push(loader.getAssetByID(16));
        this._spriteList.push(loader.getAssetByID(17));
        this.setActiveSprite(0);
        this.setCombatSprite(0);
    }

    protected doOnOverlap(overlapPoint: number[]): void {
        return;
    }
    
}