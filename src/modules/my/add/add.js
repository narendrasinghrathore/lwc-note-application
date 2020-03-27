import { LightningElement, api, track } from 'lwc';
export default class Add extends LightningElement {
    @track state = {
        title: 'Default title',
        content: 'Default content'
    };

    dialogStatus = 'hide';

    /**
     * Add or edit
     * If true, add new note or
     * edit existing note
     */
    @api add;

    @api
    get item() {
        return { ...this.state };
    }

    set item(value) {
        if (!value) return;

        this.state = { title: value.title || '', content: value.content || '' };
    }

    get buttonText() {
        return this.add ? 'Add' : 'Update';
    }

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

    handleChange(e) {
        const { name, value } = e.target;
        this.state[name] = value;
    }

    /**
     * Close modal and trigger on close save event
     */
    handleButtonClick() {
        const event = this.add ? 'add' : 'update';
        this.close(event, { ...this.state });
    }

    /**
     * Trigger event to close dialog
     */
    close(event, state) {
        event = event || 'close';
        this.dispatchEvent(
            new CustomEvent('close', {
                detail: {
                    action: event,
                    data: state
                }
            })
        );
    }

    closeDialog(e) {
        if (e.type === 'keypress' && e.keyCode !== 13) {
            return;
        }
        this.close('close');
    }
}
