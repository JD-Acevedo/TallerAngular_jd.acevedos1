export class Serie {
    id:number;
    name:string;
    channel:string;
    seasons:number;
    description:string;
    webpage:string;
    poster:string;

    public constructor(id:number,name:string,channel:string,seasons:number,description:string,webpage:string,poster:string){
        this.channel=channel;
        this.id=id;
        this.name=name;
        this.seasons=seasons;
        this.description=description;
        this.poster=poster;
        this.webpage=webpage;
    }
}
