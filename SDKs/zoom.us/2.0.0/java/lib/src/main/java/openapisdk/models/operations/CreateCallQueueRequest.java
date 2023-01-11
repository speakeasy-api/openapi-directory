package openapisdk.models.operations;



public class CreateCallQueueRequest {
    public CreateCallQueueRequests request;
    public CreateCallQueueRequest withRequest(CreateCallQueueRequests request) {
        this.request = request;
        return this;
    }
    public CreateCallQueueSecurity security;
    public CreateCallQueueRequest withSecurity(CreateCallQueueSecurity security) {
        this.security = security;
        return this;
    }
}