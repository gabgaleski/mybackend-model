export default interface ICrudUser<T> {
    findAll(): Promise<T | null>;
}