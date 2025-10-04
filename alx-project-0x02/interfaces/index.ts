export interface CardProps {
    title: string;
    content: string;
}

export interface ButtonProps {
    size: 'small' | 'medium' | 'large';
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
}

export interface PostProps {
    title: string;
    content: string;
    userId: number;
    id: number;
    body: string;
}

export interface UserProps {
    name: string;
    email: string;
    username: string;
    id: number;
    phone: string;
    website: string;
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
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}