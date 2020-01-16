window.onload = () => {
    required()
};

function required() {
    let requireds = document.querySelectorAll('[required]');

    for (let i = 0; i < requireds.length; i++) {
        let type = requireds[i].type;

        if (type === 'tel') {
            requireds[i].setAttribute('minlength', '9');
            requireds[i].setAttribute('maxlength', '19');
            requireds[i].setAttribute('pattern', '[0-9\\s\(\)+-]{10,19}');
        }

        if (type === 'email') {
            requireds[i].setAttribute('minlength', '5');
            requireds[i].setAttribute('pattern', '^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$');
        }

        if (type === 'text') {
            requireds[i].setAttribute('minlength', '2');
            requireds[i].setAttribute('pattern', '^[А-Яа-яЁёіІїЇґҐa-zA-Z\\s-]+$');
        }

    }
}