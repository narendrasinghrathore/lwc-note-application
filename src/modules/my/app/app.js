import { LightningElement } from 'lwc';
import http from '../../../../services/http-util';
export default class App extends LightningElement {
    /**
     * Url to fetch list from
     */
    url = 'posts';
    list = [];
    /**
     * dialog = 'show' means modal display:flex
     * dialog = 'hide' means modal display:none
     */
    dialog = 'hide';

    selectedItem = {};

    selectedHtmlElement;

    connectedCallback() {
        this.fetchListData();
    }

    fetchListData() {
        http.get(this.url, (data) => {
            this.list = [...data];
        });
    }

    openSelectedItem(item) {
        this.dialog = 'show';
        this.selectedItem = { ...item };
    }

    get addNewNote() {
        const res = this.selectedHtmlElement ? false : true;
        return res;
    }

    handleItem(e) {
        const {
            detail: { item, ref: selectedElement }
        } = e;
        // get reference of element, which will be required to focus again
        // after we close modal

        this.selectedHtmlElement = selectedElement
            ? selectedElement.querySelector('li')
            : undefined;

        this.openSelectedItem(item);
    }

    openDialog() {
        this.dialog = 'show';
    }

    closeDialog(e) {
        const { action } = e.detail;

        if (action === 'add') {
            this.addNote(e.detail.data);
        }

        if (action === 'update') {
            this.updateNote(e.detail.data);
        }

        if (action === 'delete') {
            this.deleteNote(e.detail.data);
        }

        // hide modal
        // remove references
        this.selectedItem = {};
        if (this.selectedHtmlElement) {
            this.selectedHtmlElement.focus();
            this.selectedHtmlElement = undefined;
        }
        this.dialog = 'hide';
    }

    addNote(note) {
        http.post(this.url, note, (data) => {
            this.list = [...this.list, data];
        });
    }
    updateNote(note) {
        http.patch(this.url, note, (data) => {
            console.log(data);
        });
    }
    deleteNote(note) {
        http.delete(this.url, note);
    }
}
