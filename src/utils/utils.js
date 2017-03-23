import shortid from 'shortid';
import cookie from 'react-cookie';

export const hasUserUniqueID = () => {
    return cookie.load('customerID') !== undefined ?
        true :
        cookie.save('customerID', shortid.generate());
};