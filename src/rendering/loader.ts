class Loader {
    public static getInstance() {
        return this._instance || (this._instance = new this());
    }

    public loadResources() {
        this._assetList.push(document.getElementById('floor') as HTMLImageElement);
        this._assetList.push(document.getElementById('wall') as HTMLImageElement); //1
        this._assetList.push(document.getElementById('hero-down') as HTMLImageElement);
        this._assetList.push(document.getElementById('hero-left') as HTMLImageElement); //3
        this._assetList.push(document.getElementById('hero-right') as HTMLImageElement);
        this._assetList.push(document.getElementById('hero-up') as HTMLImageElement); //5
        this._assetList.push(document.getElementById('skeleton') as HTMLImageElement);
        this._assetList.push(document.getElementById('boss') as HTMLImageElement); //7
        this._assetList.push(document.getElementById('hearth') as HTMLImageElement); 
        this._assetList.push(document.getElementById('cave-bg') as HTMLImageElement); //9
        this._assetList.push(document.getElementById('manna') as HTMLImageElement);
        this._assetList.push(document.getElementById('skeleton-combat') as HTMLImageElement); //11
        this._assetList.push(document.getElementById('hit-spell-icon') as HTMLImageElement);
        this._assetList.push(document.getElementById('heal-spell-icon') as HTMLImageElement); //13
        this._assetList.push(document.getElementById('fireball-spell-icon') as HTMLImageElement);
        this._assetList.push(document.getElementById('boss-up') as HTMLImageElement); //15
        this._assetList.push(document.getElementById('boss-right') as HTMLImageElement);
        this._assetList.push(document.getElementById('boss-left') as HTMLImageElement); //17
    }

    public getAssetByID(ID: number): HTMLImageElement {
        return this._assetList[ID];
    }

    private static _instance: Loader;
    private _assetList: HTMLImageElement[];

    private constructor() {
        this._assetList = new Array();
    };
}

export const loader: Loader = Loader.getInstance();
