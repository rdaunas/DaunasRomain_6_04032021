class Photograph {

    constructor(name, id, city, country, tags, tagline, price, portrait){
        this.name = name;
        this.id = id;
        this.city = city;
        this.country = country;
        this.tags = tags;
        this.tagline = tagline;
        this.price = price;
        this.portrait = portrait;
    }

    get name() {
        return this.name;
    }
    get id() {
        return this.id;
    }
    get city() {
        return this.city;
    }
    get country() {
        return this.country;
    }
    get tags() {
        return this.tags;
    }
    get tagline() {
        return this.tagline;
    }
    get price() {
        return this.price;
    }
    get portrait() {
        return this.portrait;
    }    
}
export default Photograph;