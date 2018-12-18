export class LoggingService {
    logStatusChange(status: string) {
        console.log('Logging: A server status changed, new status: ' + status);
    }
}
