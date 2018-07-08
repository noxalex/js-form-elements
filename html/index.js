const Form = require('./form');
const Checkbox = require('./checkbox');
const TextInput = require('./text-input');
const EmailInput = require('./email-input');

const form = new Form({tag: 'form', id: 'form'},
    new Checkbox({}),
    new TextInput({}),
    new EmailInput({})
);

form.on('submit', data => console.log('SUBMITTED', data) );
form.submit();

console.log(form);

