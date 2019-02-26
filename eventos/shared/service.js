const token = 'PLOV22NOECD5KXFVCNYE'

class Service {

    constructor() {
        this.loadCategories();
        //this.searchEvents();
    };
    
    async loadCategories() {
        const url = `https://www.eventbriteapi.com/v3/categories/?token=${token}`

        const categoriesList = await fetch(url);
        const categories = await categoriesList.json();
        

        return {
            categories
            }
    }

    async searchEvents(input,category) {
        const url = `https://www.eventbriteapi.com/v3/events/search/?q=${input}&sort_by=date&categories=${category}&token=PLOV22NOECD5KXFVCNYE`        

        const eventList = await fetch(url);
        const events = await eventList.json();

        return{
          events
        }
    }

    
}

