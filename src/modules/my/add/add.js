import { LightningElement, api } from 'lwc';
export default class Add extends LightningElement {
    dialogStatus = 'hide';

    /**
     * Public property to set class for section
     */
    @api
    get display() {
        return this.dialogStatus;
    }

    set display(value) {
        this.dialogStatus = value;
    }
    /**
     * Trigger event to close dialog
     */
    closeDialog() {
        this.dispatchEvent(
            new CustomEvent('close', {
                detail: 'hide'
            })
        );
    }
}
