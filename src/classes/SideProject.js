export class SideProject {
    constructor(title, description, url) {
        this.title = title;
        this.description = description;
        this.url = url;
    }

    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    getUrl() {
        return this.url;
    }
}