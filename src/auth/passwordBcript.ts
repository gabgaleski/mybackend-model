import { hashSync } from "bcryptjs";

const SALT_ROUNDS = 10;

const hashPassword = (password: string): string => {
    return hashSync(password, SALT_ROUNDS);
}

export default hashPassword;