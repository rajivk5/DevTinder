// const adminAuth = (req, res, next) => {
//     console.log('adminAuth is called');

//     const token = 'sdfjoj'
//     const isAdminAuthorized = token === 'xyz'

//     if (!isAdminAuthorized) {
//         res.status(401).send('Unauthorized user')
//     } else {
//         console.log('next running');

//         next();
//     }
// }


const middleware1 = (req, res, next) => {
    console.log('middleware1');
    next();
}
const middleware2 = (req, res, next) => {
    console.log('middleware2');
    next();
}

const middleware3 = (req, res, next) => {
    console.log('middleware3 abc');
    next(); 
}



module.exports = { middleware1, middleware2, middleware3 }