package openapisdk.models.operations;



public class GetACallQueueRequest {
    public GetACallQueuePathParams pathParams;
    public GetACallQueueRequest withPathParams(GetACallQueuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetACallQueueSecurity security;
    public GetACallQueueRequest withSecurity(GetACallQueueSecurity security) {
        this.security = security;
        return this;
    }
}