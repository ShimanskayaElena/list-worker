interface WorkerInterface {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export class Worker implements WorkerInterface {
    constructor (
        public id: number,
        public name: string,
        public email: string,
        public address: {
            street: string,
            suite: string,
            city: string,
            zipcode: string,
            geo: {
                lat: string,
                lng: string
            }
        },
        public phone: string,
        public website: string,
        public company: {
            name: string,
            catchPhrase: string,
            bs: string
        }
    ) {}
}
