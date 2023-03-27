import { GameMap } from "./gameMap";

class Node{
    public g: number;
    public h: number;

    public coordinates: number[];

    public parent: Node;

    public constructor(coordinates: number[], parent: Node = null){
        this.parent = parent;
        this.coordinates = coordinates;
        this.g = this.h = 0;
    }

    public getScore(): number{
        return this.g + this.h;
    }
}

function getManhattan(source: number[], target: number[]): number {
    return Math.abs(Math.abs(source[0] - target[0]) - Math.abs(source[1] - target[1]));
}

function findPath(map: GameMap, from: number[], to: number[]): number[][]{
    let current: Node = null;
    let openSet: Node[] = new Array(100);
    let closedSet: Node[] = new Array(100);

    openSet.push(new Node(from));

    while(!(openSet.length === 0)){
        let currentNode: Node = openSet[0];

        for(let it of openSet){
            let node: Node = it;
            if(node.getScore() <= currentNode.getScore()){
                currentNode = node;
            }
        }

        if(currentNode.coordinates[0] === to[0] && currentNode.coordinates[1] === to[1]){
            break;
        }

        closedSet.push(currentNode);
        openSet.splice(openSet.indexOf(currentNode), 1);

        for(let i = 0; i < 4; ++i){
            
        }

    }

    return [[]];
}

export function faceDirection(map: GameMap, from: number[], to: number[]): number {
    
    return 0;
}