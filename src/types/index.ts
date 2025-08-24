export enum Stage {
    FIRST = 1,
    SECOND = 2,
    THIRD = 3,
    FOURTH = 4,
    FIFTH = 5,
    SIXTH = 6,
}

export enum Gender {
    MALE = 0,
    FEMALE = 1,
}

export interface ISubject {
    id: number,
    name: string,
}

export interface IStudents {
    id: number,
     name: string,
    age: number,
    gender: Gender,
    stage: Stage,
    absents: number,
    isNerd: boolean,
    subjects: ISubject[],
}