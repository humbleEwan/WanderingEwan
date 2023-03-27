import { instance } from "../../gameInstance";
import { loader } from "../../rendering/Loader";
import { Entity } from "./Entity";

export class PLayer extends Entity{
    public constructor(startLocation: number[]){
        super(false, startLocation, 10);
        this._isFat = false;
        this._score = 0;
        this._cManna = 10;
        this._maxMana = 10;
    }
    
    public executeBehaviour(): void {
        throw new Error("Player should not have any AI");
    }

    public handleInput(keyIndex: number): boolean{
        if(!instance.isInCombat){
            switch(keyIndex){
                case 87:{
                    this.setActiveSprite(3);
                    this.regenMana();
                    return this.move(0);
                }
                case 83:{
                    this.setActiveSprite(0);
                    this.regenMana();
                    return this.move(1);
                }
                case 65:{
                    this.setActiveSprite(1);
                    this.regenMana();
                    return this.move(2);
                }
                case 68:{
                    this.setActiveSprite(2);
                    this.regenMana();
                    return this.move(3);
                }
                case 50:{ //HEAL
                    if(this._cManna >= 2 && this._HP < this._maxHP){
                        let a: number = Math.floor(Math.random() * 2) + 2;
                        this.modifyHP(a);
                        this.modifyManna(-2);
                        return true;
                    }
                    return false;
                }
                default:{
                    console.log("Key index: ", keyIndex);
                    return false;
                }
            }
        } else {
            switch(keyIndex){
                case 49:{ //BASE ATTACK -1 HP GUARANTEED
                    instance.getEnemyEntity().modifyHP(-1);
                    return true;
                }
                case 50:{ //HEAL
                    if(this._cManna >= 2 && this._HP < this._maxHP){
                        let a: number = Math.floor(Math.random() * 2) + 2;
                        this.modifyHP(a);
                        this.modifyManna(-2);
                        return true;
                    }
                    return false;
                }
                case 51: { //Fireball 2+ dmg
                    if(this._cManna >= 3){
                        let a: number = Math.floor(Math.random() * Math.floor(2 + this.getScore() / 3) + 2);
                        instance.getEnemyEntity().modifyHP(-a);
                        this.modifyManna(-3);
                        return true;
                    }
                    return false;
                }
                default:{
                    return false;
                }
            }
        }
    }

    public addScore(amount: number){
        this._score += amount;
    }

    public getScore(): number{
        return this._score;
    }

    public getManna(): number {
        return this._cManna;
    }

    public modifyManna(amount: number){
        if(this._cManna + amount > this._maxMana){
            this._cManna = this._maxMana;
        } else {
            this._cManna += amount;
        }
    }

    protected loadSprites(): void {
        for(let i = 2; i < 6; ++i){
            this._spriteList.push(loader.getAssetByID(i));
        }
        this.setActiveSprite(0);
    }

    protected doOnOverlap(overlapPoint: number[]): void {
        instance.startCombat(instance.getEntityAtLocation(overlapPoint));
    }

    private _score: number;
    private _cManna: number;
    private _maxMana: number;

    private regenMana(){
        if(Math.random() > 0.8){
            this.modifyManna(1);
        }
    }
}