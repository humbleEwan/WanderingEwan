import Pixeboy from "../font/pixboy.ttf";

import { Entity } from "../actors/enities/entity";
import { instance } from "../gameInstance";
import { GameMap } from "../map/gameMap";
import { loader } from "./Loader";

class MasterRenderer {
    public debugSquares: number[][] = [[]];

    public static getInstance() {
        return this._instance || (this._instance = new this());
    }

    public render(map: GameMap, entityList: Entity[]) {
        this._ctx.clearRect(0, 0, this._width, this._height);

        if (!instance.hasGameEnded) {
            if (instance.isInCombat) {
                this._ctx.drawImage(loader.getAssetByID(9), 0, 0)
                this._ctx.drawImage(instance.getEnemyEntity().getCombatSprite(), 4 * 72, 2.5 * 72);
            } else {
                this.renderMap(map);
                this.renderEnitites(entityList);
            }

            this.renderUI();
        } else {
            this._ctx.fillStyle = "rgba(0, 0, 0, 1)";
            this._ctx.fillRect(0, 0, this._width, this._height);
            this._ctx.font = "180px Pixeboy";
            this._ctx.fillStyle = "rgba(200, 0, 0, 1)";
            this._ctx.fillText("GAME", this._width / 2 - 170, this._height / 2 - 52);
            this._ctx.fillText("OVER", this._width / 2 - 170, this._height / 2 + 52);
        }

        this.renderDebugSquares();
    }

    private static _instance: MasterRenderer;
    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _width: number;
    private _height: number;

    private constructor() {
        this._canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
        this._ctx = this._canvas.getContext('2d');
        this._width = this._canvas.width;
        this._height = this._canvas.height;

        loader.loadResources();
    };

    private renderMap(map: GameMap) {
        let playerLocation: number[] = instance.playerReference.getLocation();
        let viewMatrix: number[][] = new Array(10);

        for (let i = 0; i < 10; ++i) {
            viewMatrix[i] = new Array(10);
            for (let j = 0; j < 10; ++j) {
                if (i + playerLocation[0] - 4 < 0 || j + playerLocation[1] - 4 < 0 || j + playerLocation[1] - 4 > 99 || i + playerLocation[0] - 4 > 99) {
                    viewMatrix[i][j] = 1;
                } else {
                    viewMatrix[i][j] = instance.getMap().getMapMatrix()[i + playerLocation[0] - 4][j + playerLocation[1] - 4];
                }
            }
        }

        for (let i = 0; i < 10; ++i) {
            for (let j = 0; j < 10; ++j) {
                this._ctx.drawImage(loader.getAssetByID(viewMatrix[i][j]), i * 72, j * 72);
            }
        }
    }

    private renderEnitites(entityList: Entity[]) {
        let playerLocation: number[] = instance.playerReference.getLocation();
        let entityLocation: number[];
        this._ctx.drawImage(entityList[0].getActiveSprite(), 4 * 72, 4 * 72);

        for (let i = 1; i < entityList.length; ++i) {
            entityLocation = entityList[i].getLocation();
            this._ctx.drawImage(entityList[i].getActiveSprite(), (entityLocation[0] - (playerLocation[0] - 4)) * 72, (entityLocation[1] - (playerLocation[1] - 4)) * 72);
        }
    }

    private renderUI() {
        if (instance.isInCombat) {
            //Temporary UI background draw
            this._ctx.fillStyle = "rgba(40, 40, 30, 1)"
            this._ctx.fillRect(0, 550, 720, 250);
            this._ctx.fillStyle = "rgba(140, 140, 130, 1)"
            this._ctx.fillRect(0, 550, 720, 20);

            //Stat draw for player
            for (let i = 0; i < instance.playerReference.getHP(); ++i) {
                this._ctx.drawImage(loader.getAssetByID(8), i * 32, 574);
            }
            for (let i = 0; i < instance.playerReference.getManna(); ++i) {
                this._ctx.drawImage(loader.getAssetByID(10), 360 + i * 32, 574);
            }

            //Stat draw for enemy
            this._ctx.fillStyle = "rgba(30, 60, 40, 1)";
            this._ctx.fillRect(this._width / 2 - 50, 2 * 72, 100, 20);

            this._ctx.fillStyle = "rgba(230, 30, 40, 1)";
            this._ctx.fillRect(this._width / 2 - 50, 2 * 72, (instance.getEnemyEntity().getHP() / instance.getEnemyMaxHP()) * 100, 20);

            this._ctx.strokeStyle = "rgba(170, 170, 170, 1)";
            this._ctx.lineWidth = 3;
            this._ctx.strokeRect(this._width / 2 - 50, 2 * 72, 100, 20);

            for (let i = 12; i < 15; ++i) {
                this._ctx.drawImage(loader.getAssetByID(i), 30 + ((i - 12) * 100), 674);

                this._ctx.font = "30px Pixeboy";
                this._ctx.fillStyle = "rgba(255, 255, 255, 1)";
                this._ctx.fillText((i - 11).toString(), 40 + ((i - 12) * 100), 700);
                this._ctx.lineWidth = 1;
                this._ctx.strokeStyle = "rgba(0, 0, 0, 1)";
                this._ctx.strokeText((i - 11).toString(), 40 + ((i - 12) * 100), 700);
            }
        } else {
            //Temporary UI background draw
            this._ctx.fillStyle = "rgba(100, 100, 50, 1)"
            this._ctx.fillRect(0, 720, 720, 80);

            for (let i = 0; i < instance.playerReference.getHP(); ++i) {
                this._ctx.drawImage(loader.getAssetByID(8), i * 16, 724);
            }

            for (let i = 0; i < instance.playerReference.getManna(); ++i) {
                this._ctx.drawImage(loader.getAssetByID(10), 210 + i * 16, 724);
            }

            this._ctx.font = "60px Pixeboy";
            this._ctx.fillStyle = "rgba(0, 0, 0, 1)";
            this._ctx.fillText("Score: " + instance.playerReference.getScore(), 440, 775);
        }
    }

    private renderDebugSquares() {
        this._ctx.fillStyle = "rgba(255,0,0,0.5)";
        for (let i = 0; i < this.debugSquares.length; ++i) {
            this._ctx.fillRect((this.debugSquares[i][0] * 72 + 10), (this.debugSquares[i][1] * 72 + 10), 52, 52);
        }
        this.debugSquares = [[]];
    }
}

export const masterRenderer: MasterRenderer = MasterRenderer.getInstance();
