export class ServersService {
    private servers: IServer[] = [
        {id: 1, name: 'Production server', status: 'online'},
        {id: 2, name: 'Testserver', status: 'offline'},
        {id: 3, name: 'Devserver', status: 'decommissioned'},
    ];
    name = '';

    getServers() {
        return this.servers.slice();
    }
    getServer(id: number) {
        return this.servers.find((s) => s.id === id );
    }

    updateServer(id: number, serverInfo: {name: string, status: string}) {
        const server = this.getServer(id);
        if (server) {
            server.name = serverInfo.name;
            server.status = serverInfo.status;
        }
    }
}
