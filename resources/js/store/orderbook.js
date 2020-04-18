import { observable, computed, action, runInAction } from 'mobx';

export default class {
    @observable book = [];


    constructor(rootStore) {
        this.rootStore = rootStore;
        // this.api = this.rootStore.api.cart;
        this.storage = this.rootStore.storage;
    }


    @action load() {
        return new Promise((resolve, reject) => {
            let self = this;
            axios.get('/getbook')
                .then(function (response) {
                    self.book = response.data;
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error)
                    reject(error);
                })
        });
    }

    @action load1() {
        return new Promise((resolve, reject) => {
            this.book = ['1111', '2222'];

            /*this.api.all().then((data) => {
                this.book = data;
                resolve(true);
            });*/
        });
    }

}
