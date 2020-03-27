import { LightningElement, api } from 'lwc';
export default class Item extends LightningElement {
    @api item = {};
    delegatesFocus = true;

    openSelectedItem(e) {
        if (e.type === 'keypress' && e.keyCode !== 13) {
            return;
        }
        this.dispatchEvent(
            new CustomEvent('openitem', {
                detail: {
                    item: { ...this.item },
                    ref: this.template
                },
                bubbles: false,
                composed: true
            })
        );
    }
}
