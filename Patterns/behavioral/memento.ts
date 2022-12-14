class Originator {
    private state: string;

    constructor(state: string) {
        this.state = state;
        console.log('Создатель: "Моё начальное состояние: ' + this.state + '"');
    }

    public save(): Memento {
        return new Memento(this.state);
    }

    public restore(memento: Memento): void {
        this.state = memento.getState();
        console.log('Создатель: "Моё состояние восстановилось на ' + this.state + '"');
    }

    public changeState(_state: string) {
        this.state = _state;
        console.log('Создатель: "Моё состояние поменялось на ' + this.state + '"');
    }

    public showState() {
        console.log(this.state);
    }
}

class Memento {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    public getState(): string {
        return this.state;
    }
}


class Caretaker {
    private mementos: Memento[] = [];

    private originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
    }

    public addMemento(): void {
        console.log('Опекун: "Состояние сохранено!"');
        this.mementos.push(this.originator.save());
    }

    public undoMemento(): void {
        if (!this.mementos.length) {
            return;
        }

        let memento: Memento = this.mementos.pop();

        console.log('Опекун: "Восстанавливаю состояние до: ' + memento?.getState() + '"');
        this.originator.restore(memento);
    }
}


const originator = new Originator('Super-duper-super-puper-super.');
const caretaker = new Caretaker(originator);

originator.showState();
caretaker.addMemento();

originator.changeState('other state');
originator.showState();

caretaker.undoMemento();
originator.showState();