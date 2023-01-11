package openapisdk.models.operations;



public class UpdateCallQueueRequest {
    public UpdateCallQueuePathParams pathParams;
    public UpdateCallQueueRequest withPathParams(UpdateCallQueuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateCallQueueRequests request;
    public UpdateCallQueueRequest withRequest(UpdateCallQueueRequests request) {
        this.request = request;
        return this;
    }
    public UpdateCallQueueSecurity security;
    public UpdateCallQueueRequest withSecurity(UpdateCallQueueSecurity security) {
        this.security = security;
        return this;
    }
}