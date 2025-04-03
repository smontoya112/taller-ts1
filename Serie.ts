class Serie {
    id: number;
    title: string;
    network: string;
    season: number;
    description: string;
    url: string;
    image: string;

    constructor(id: number, title: string, network: string, season: number, description: string, url: string, image: string) {
        this.id = id;
        this.title = title;
        this.network = network;
        this.season = season;
        this.description = description;
        this.url = url;
        this.image = image;
    }
}