import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class LocalStorageService {
    constructor() {}

    save(storageID: string, data: any) {
        localStorage.setItem(storageID, JSON.stringify(data));
    }

    remove(storageID: string) {
        localStorage.removeItem(storageID);
    }

    get<T>(storageID: string): T | null {
        let jsonData = localStorage.getItem(storageID);
        if (jsonData === null) {
            return null;
        }
        let data: T = JSON.parse(jsonData);

        return data;
    }
}
