import {User, IUser} from './index';

describe ('User Lib Unit Tests', () => {

    it('Should Create an Instance of User', () => {
        const userInstance = new User();
        expect (userInstance).toBeDefined();
    });
    it('Should Add a new User Item', () => {
        const userInstance = new User();
        const userItems: IUser = {
            name: 'Mario',
            lastName: 'Martinez',
            user: 'marioJose',
            password: 'mario20',
            email: 'mar@gmail.com'
        }
        const index = userInstance.addUser(userItems);
        expect(index).toBe(0);
    });
});