import { instance } from "../../gameInstance";
import { loader } from "../../rendering/Loader";
import { Entity } from "./Entity";

export class Skeleton extends Entity{
    public constructor(startLocation: number[]){
        super(true, startLocation, Math.floor(Math.random() * instance.playerReference.getScore()) + 2);
        this._isFat = true;
    }
    
    public executeBehaviour(): void {
        if(instance.isInCombat && this.isInCombet){
            if(this._HP <= 0){
                instance.deleteEntity(this);
                instance.isInCombat = false;
                instance.playerReference.addScore(1);
            } else if(Math.random() > 0.6){
                instance.playerReference.modifyHP(-1);
            }
        } else {
            if(Math.random() > 0.2){
                this.move(Math.floor(Math.random() * 4));
            }
        }
    }

    protected loadSprites(): void {
        this._spriteList.push(loader.getAssetByID(6));
        this._spriteList.push(loader.getAssetByID(11));
        this.setActiveSprite(0);
        this.setCombatSprite(1);
    }

    protected doOnOverlap(overlapPoint: number[]): void {
        return;
    }
}