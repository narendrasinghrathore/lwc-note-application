import { LightningElement } from 'lwc';
import http from '../../../../services/http-util';
export default class App extends LightningElement {
    url = 'posts';
    list = [];
    dialog = 'hide';
    connectedCallback() {
        http.get(this.url, (data) => {
            this.list = data;
        });
    }

    openDialog() {
        this.dialog = 'show';
    }
    closeDialog(e) {
        const action = e.detail;
        this.dialog = action;
    }
}
