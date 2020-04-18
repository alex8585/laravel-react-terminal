import { observable, computed, action, runInAction } from 'mobx';

export default class {
    @observable book = []


    constructor(rootStore) {
        this.rootStore = rootStore;
        // this.api = this.rootStore.api.cart;
        this.storage = this.rootStore.storage;
    }

    @action load() {
        return new Promise((resolve, reject) => {
            this.book = ['1111', '2222'];
            resolve(true);
            /*this.api.all().then((data) => {
                this.book = data;
                resolve(true);
            });*/
        });
    }

}
