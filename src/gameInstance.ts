import { Actor } from "./actors/actor";
import { Entity } from "./actors/enities/entity";
import { PLayer } from "./actors/enities/player";
import { GameMap } from "./map/gameMap";
import { masterRenderer } from "./rendering/masterRenderer";

export class GameInstance{
    public playerReference: PLayer;
    public isInCombat: boolean = false;
    public hasGameEnded: boolean = false;

    public static getInstance(){
        return this._instance || (this._instance = new this());
    }
    
    public setupMap(){
        this._gameMap = new GameMap();
        this._actorList.push(this._gameMap);
    }

    public setup(){
        this.finishTurn();
    }

    public proceedTurn(){
        this._entityList.forEach(function(e){
            if(e.hasBehaviour){
                e.executeBehaviour();
            }
        });
        if(this.playerReference.getHP() <= 0){
            this.hasGameEnded = true;
        }
        this.finishTurn();
    }

    public startCombat(enemy: Entity){
        this.isInCombat = true;
        this._enemyEntity = enemy;
        this._enemyMaxHP = enemy.getHP();
        enemy.isInCombet = true;
    }

    public createNewActor(actor: Actor){
        this._actorList.push(actor);
    }

    public createNewEntity(entity: Entity){
        this._actorList.push(entity);
        this._entityList.push(entity);
        entity.index = this._entityIndex;
        ++this._entityIndex;
    }

    public getMap(): GameMap{
        return this._gameMap;
    }

    public isOccupiedByEntity(location: number[]): boolean{
        let _occ: boolean = false;
        this._entityList.forEach(function(e){
            if(e.getLocation()[0] === location[0] && e.getLocation()[1] === location[1]){
                _occ = true;
            }
        });
        return _occ;
    }

    public getEntityAtLocation(location: number[]): Entity{
        let _occEnt: Entity;
        this._entityList.forEach(function(e){
            if((e.getLocation()[0] === location[0]) && (e.getLocation()[1] === location[1])){
                _occEnt = e;
            }
        });
        return _occEnt;
    }

    public deleteEntity(entity: Entity){
        for(let i = 0; i < this._entityList.length; ++i){
            if(entity.index === this._entityList[i].index){
                this._entityList.splice(i, 1);
            }
        }
    }

    public getEnemyEntity(): Entity{
        return this._enemyEntity;
    }

    public getEnemyMaxHP(): number {
        return this._enemyMaxHP;
    }

    public findPlayerStartLocation(): number[]{
        for(let i = 0; i < this._gameMap.getMapMatrix().length; ++i){
            for(let j = 0; j < this._gameMap.getMapMatrix()[i].length; ++j){
                if(this._gameMap.getMapMatrix()[j][i] === 0){
                    return [j, i];
                }
            }
        }
    }

    public getMapTileAtLocation(location: number[]): number{
        return this._gameMap.getMapMatrix()[location[0]][location[1]];
    }

    private static _instance: GameInstance;

    private _gameMap: GameMap;
    private _actorList: Actor[]; //Everything
    private _entityList: Entity[]; //Everything with AI behaviour

    private _entityIndex: number = 0; //unique entity index for each entity (XDDDDDD)

    private _enemyEntity: Entity;
    private _enemyMaxHP: number;

    private constructor(){
        this._actorList = new Array();
        this._entityList = new Array();
    }

    private finishTurn(){
        masterRenderer.render(this._gameMap, this._entityList);
    }
}

export const instance: GameInstance = GameInstance.getInstance();
