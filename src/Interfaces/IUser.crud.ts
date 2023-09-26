export default interface ICrudUser<T> {
    findAll(): Promise<T | null>;
    create(): Promise<T>;
    findById(): Promise<T | null>;
    delete(): Promise<number>;
}