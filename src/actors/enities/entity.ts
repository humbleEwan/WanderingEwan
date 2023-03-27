import { instance } from "../../gameInstance";
import { Actor } from "../actor";

export abstract class Entity extends Actor{
    public hasBehaviour: boolean;
    public index: number;
    public isInCombet: boolean;
    
    public constructor(callBehavour: boolean,startLocation: number[], maxHP: number){
        super();
        this.hasBehaviour = callBehavour;

        this._location = startLocation;
        this._spriteList = new Array();
        this._HP = maxHP;
        this._maxHP = maxHP;
        this.isInCombet = false;
        this.loadSprites();
    }
    
    public abstract executeBehaviour(): void;

    public getLocation(): number[]{
        return this._location;
    }
    
    public setActiveSprite(index: number){
        this._currentActiveSprite = index;
    }

    public setCombatSprite(index: number){
        this._combatSprite = index;
    }

    public getActiveSprite(): HTMLImageElement {
        return this._spriteList[this._currentActiveSprite];
    }

    public getCombatSprite(): HTMLImageElement {
        return this._spriteList[this._combatSprite];
    }

    public modifyHP(amount: number){
        if(this._HP + amount > this._maxHP){
            this._HP = this._maxHP;
        } else {
            this._HP += amount;
        }
    }

    public getHP(): number {
        return this._HP;
    }

    protected _currentActiveSprite: number;
    protected _spriteList: HTMLImageElement[];
    protected _location: number[]; //X and Y
    protected _isFat: boolean;
    protected _combatSprite: number;

    protected _HP: number;
    protected _maxHP: number;

    protected abstract loadSprites(): void;
    protected abstract doOnOverlap(overlapPoint: number[]): void;

    protected move(direction: number): boolean{
        let nextY: number;
        let nextX: number;

        let mapMatrix: number[][] = instance.getMap().getMapMatrix();

        switch(direction){
            case 0:{ //UP
                nextX = this._location[0];
                nextY = this._location[1] - 1;
                break;
            }
            case 1:{ //DOWN
                nextX = this._location[0];
                nextY = this._location[1] + 1;
                break;
            }
            case 2:{ //LEFT
                nextX = this._location[0] - 1;
                nextY = this._location[1];
                break;
            }
            case 3:{ //RIGHT
                nextX = this._location[0] + 1;
                nextY = this._location[1];
                break;
            }
            default:{
                throw new Error("Invalid direction!");
            }
        }

        if((mapMatrix[nextX][nextY] !== 0) || (this._isFat && instance.isOccupiedByEntity([nextX, nextY]))){
            return false;
        } else if(instance.isOccupiedByEntity([nextX, nextY])){
            this.doOnOverlap([nextX, nextY]);
            this._location[0] = nextX;
            this._location[1] = nextY;
            return true;
        } else {
            this._location[0] = nextX;
            this._location[1] = nextY;
            return true;
        }
    }
}
