
interface LocationType {
    name: string;
    url: string;
}

export enum Status {
    ALL = '',
    ALIVE = 'alive',
    DEAD = 'dead',
    UNKNOWN = 'unknown',
}

export enum Race {
    ALL = '',
    HUMAN = 'human',
    ALIEN = 'alien',
    HUMANOID = 'humanoid',
    UNKNOWN = 'unknown',
    POOPYBUTTHOLE = 'poopybutthole',
    MYTHOLOGICAL = 'mythological Creature',
    ANIMAL = 'animal',
    ROBOT = 'robot',
    CRONENBERG = 'cronenberg',
    DISEASE = 'disease',
}

export type Character = {
    id: number; 
    name: string; 
    status: Status; 
    species: string; 
    type: string; 
    gender: string; 
    origin: LocationType; 
    location: LocationType; 
    image: string; 
    episode: string[]; 
    url: string; 
    created: string;
};