import "client-only";

export function getLocalStorage(key: string, defaultValue:any){
    const stickyValue = localStorage.getItem(key);

    return (stickyValue === null || stickyValue === 'undefined')
        ? defaultValue
        : JSON.parse(stickyValue);
}

export function setLocalStorage(key: string, value:any){
    localStorage.setItem(key, JSON.stringify(value));
}