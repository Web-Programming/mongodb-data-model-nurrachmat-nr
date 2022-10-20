const index = (req, res, next) => {
    res.render('index', { title: 'Express', nama: 'Nur Rachmat' });
};

const demo = (req, res, next) => {
    res.render('index', { title: 'Express', nama: 'Nur Rachmat' });
};

const show = (req, res, next) => {
    res.render('index', { title: 'Express', nama: 'Nur Rachmat' });
};

const edit = (req, res, next) => {
    res.render('index', { title: 'Express', nama: 'Nur Rachmat' });
};

const destroy = (req, res, next) => {
    res.render('index', { title: 'Express', nama: 'Nur Rachmat' });
};

module.exports = {
    index, 
    show, 
    edit, 
    destroy, 
    demo
}