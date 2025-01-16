import { usersArray, User } from './users';
import { usersInfoArray, UserInfo } from './userInfo';

interface UserPosition {
    name: string;
    position: string;
    age: number;
    gender: string;
}

function getUsersJobPositions(users: User[]): UserPosition[] {
    return users.map(user => {
        const userInfo = usersInfoArray.find(info => info.userid === user.userid);
        if (userInfo) {
            return {
                name: user.name,
                position: userInfo.organization.position,
                age: userInfo.age,
                gender: user.gender,
            };
        }
        throw new Error(`No additional info found for user with id ${user.userid}`);
    });
}

const usersPositions = getUsersJobPositions(usersArray);
console.log('userPositions', usersPositions);

