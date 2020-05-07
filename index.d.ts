declare module 'egg' {
    import { Connection } from 'typeorm';


    interface Application {
        typeorm: Connection[];
    }
}