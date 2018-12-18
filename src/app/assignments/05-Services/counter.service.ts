export class CounterService {
    inactiveToActiveCounter = 0;
    activeToInactiveCounter = 0;

    incrementActiveToInactive() {
        this.activeToInactiveCounter++;
    }
    incrementInactiveToActive() {
        this.inactiveToActiveCounter++;
    }

}
