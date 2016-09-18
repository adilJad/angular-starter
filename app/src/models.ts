/// <reference path="_all.ts" />

module ContactManagerApp {
    
    export class User {
        constructor(
            public name: String,
            public avatar: String,
            public bio: String,
            public notes: Note[]
        ) {}
    }

    export class Note {
        constructor(
            public title: String, 
            public date: Date
            ) {}
    }
}