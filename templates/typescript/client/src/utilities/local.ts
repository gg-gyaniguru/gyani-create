const setKey = (key:string, value:any) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getKey = (key:string) => {
    const value = localStorage.getItem(key);
    if (!value) {
        return undefined;
    }
    return JSON.parse(value);
};

const removeKey = (key:string) => {
    localStorage.removeItem(key);
};

export {setKey, getKey, removeKey};