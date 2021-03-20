export const objectToArray = <T>(obj: T): (T[keyof T] & { id: keyof T; })[] => {
    let array = [];

    for (const prop in obj) {
        array.push({ ...obj[prop], id: prop });
    }

    return array;
};