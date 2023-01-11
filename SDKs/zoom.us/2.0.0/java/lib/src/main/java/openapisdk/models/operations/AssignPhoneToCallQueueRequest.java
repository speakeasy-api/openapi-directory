package openapisdk.models.operations;



public class AssignPhoneToCallQueueRequest {
    public AssignPhoneToCallQueuePathParams pathParams;
    public AssignPhoneToCallQueueRequest withPathParams(AssignPhoneToCallQueuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AssignPhoneToCallQueueRequests request;
    public AssignPhoneToCallQueueRequest withRequest(AssignPhoneToCallQueueRequests request) {
        this.request = request;
        return this;
    }
    public AssignPhoneToCallQueueSecurity security;
    public AssignPhoneToCallQueueRequest withSecurity(AssignPhoneToCallQueueSecurity security) {
        this.security = security;
        return this;
    }
}