document.addEventListener('DOMContentLoaded', function () {
    [...document.getElementsByClassName('text-field')].forEach((element) => {
        var textField = new TextField(element);
        textField.init();
    });
});

function TextField(selector) {
    this.componentSelector = selector;
    this.input = selector.querySelector('input[type="text"]');
}

function onChange(event) {
    document.querySelector('hello-world').setAttribute('name', event.target.value);
}

TextField.prototype = {
    init: function () {
        var that = this;
        console.log(that);
        that.initInputListeners();
    },
    initInputListeners: function () {
        var that = this;

        that.input.addEventListener('change', (event) => {
            onChange(event);
        });
        that.input.addEventListener('keyup', (event) => {
            onChange(event);
        });
    },
};
