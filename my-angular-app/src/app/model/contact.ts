export class Contact {
    id: number;
    firstname: string;
    lastname?: string;
    email: string;
    phone: string;
    dob?: string;
    gender: string = 'Male';
    address?: string;
    city?: string = 'Bangalore';
    state?: string = 'Karnataka';
    country?: string = 'India';
    picture?: string = '/assets/images/profile-default.jpg';
}
