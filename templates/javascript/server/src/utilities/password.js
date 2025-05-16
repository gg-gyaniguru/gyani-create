const hash = async (password) => {
    return await Bun.password.hash(password);
}

const isMatch = async (password, hash) => {
    return await Bun.password.verify(password, hash);
}

export {hash, isMatch}