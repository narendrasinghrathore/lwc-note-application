import { LightningElement, api } from 'lwc';

export default class Notes extends LightningElement {
    @api list = [];

    get totalNotes() {
        return this.list.length;
    }
}
