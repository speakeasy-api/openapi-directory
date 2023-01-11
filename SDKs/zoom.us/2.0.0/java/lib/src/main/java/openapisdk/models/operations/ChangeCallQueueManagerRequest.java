package openapisdk.models.operations;



public class ChangeCallQueueManagerRequest {
    public ChangeCallQueueManagerPathParams pathParams;
    public ChangeCallQueueManagerRequest withPathParams(ChangeCallQueueManagerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ChangeCallQueueManagerRequests request;
    public ChangeCallQueueManagerRequest withRequest(ChangeCallQueueManagerRequests request) {
        this.request = request;
        return this;
    }
    public ChangeCallQueueManagerSecurity security;
    public ChangeCallQueueManagerRequest withSecurity(ChangeCallQueueManagerSecurity security) {
        this.security = security;
        return this;
    }
}