import { Actor } from "../actors/actor";
import { generateMap } from "./celluralAutomataGeneration";

export class GameMap extends Actor{
    public constructor(){
        super();
        this.generateNewMap();
    }

    public generateNewMap(){
        this._mapMatrix = generateMap();
    }

    public getMapMatrix(): number[][]{
        return this._mapMatrix;
    }

    private _mapMatrix: number[][];
}
