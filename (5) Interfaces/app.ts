//  Вводная информация.
//
//      В данном примере отображено использование механизма интерфейсов
//  на примере социальной сети - где помимо обычных пользователей сидят
//  администраторы.
//
//      У администратор есть метод, удаляющий пользователя из соцсети,
//  при этом удалить она может как обычного пользователя, так и администратора ниже рангом.


interface IUser {
    id: number;
    name: string;
    surname: string;
}


class User implements IUser {
    id: number;
    name: string;
    surname: string;

    rating: number = 0;

    constructor(_id: number, _name: string, _surname: string) {
        this.id = _id;
        this.name = _name;
        this.surname = _surname;
    }
}


class Administrator implements IUser {
    id: number;
    name: string;
    surname: string;

    rank: number = 1;

    constructor(_id: number, _name: string, _surname: string) {
        this.id = _id;
        this.name = _name;
        this.surname = _surname;
    }

    public deleteUser(user: IUser): void {
        if (user instanceof Administrator) {
            if (this.rank > user.rank) {
                console.log(`Admin has been deleted!`);
            }
            else if (this.rank <= user.rank) {
                console.log("Whoops! You can't delete administrator with rank higher ");
            }
        } else {
            console.log(`Admin has been deleted!`);
        }
    }
}

let admin: Administrator = new Administrator(1, "George", "Capetown");
admin.rank = 5;

let anotherAdmin: Administrator = new Administrator(2, "John", "Cooper");

anotherAdmin.deleteUser(admin);  //  Ошибка: удалить администратор рангом выше нельзя
admin.deleteUser(anotherAdmin);