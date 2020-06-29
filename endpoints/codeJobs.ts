import { CodeJob } from '../entities/codeJobs';
import Endpoint from '../endpoint';
import { PapiClient } from '../papi-client';

class CodeJobEndpoint {
    constructor(private service: PapiClient, private uuid: string) {}

    async find(includeDeleted = false): Promise<CodeJob> {
        return await this.service.get(`/code_jobs/${this.uuid}?include_deleted=${includeDeleted}`);
    }

    async publish(body: { comment: string }) {
        return this.service.post(`/code_jobs/${this.uuid}/publish`, body);
    }
}

export class CodeJobsEndpoint extends Endpoint<CodeJob> {
    constructor(service: PapiClient) {
        super(service, '/code_jobs');
    }
    uuid(uuid: string) {
        return new CodeJobEndpoint(this.service, uuid);
    }
}
