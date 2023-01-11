package openapisdk.models.operations;



public class DeleteACallQueueRequest {
    public DeleteACallQueuePathParams pathParams;
    public DeleteACallQueueRequest withPathParams(DeleteACallQueuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteACallQueueSecurity security;
    public DeleteACallQueueRequest withSecurity(DeleteACallQueueSecurity security) {
        this.security = security;
        return this;
    }
}