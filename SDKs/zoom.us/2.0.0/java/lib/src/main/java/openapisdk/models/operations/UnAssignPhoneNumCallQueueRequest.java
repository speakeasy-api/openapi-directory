package openapisdk.models.operations;



public class UnAssignPhoneNumCallQueueRequest {
    public UnAssignPhoneNumCallQueuePathParams pathParams;
    public UnAssignPhoneNumCallQueueRequest withPathParams(UnAssignPhoneNumCallQueuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UnAssignPhoneNumCallQueueSecurity security;
    public UnAssignPhoneNumCallQueueRequest withSecurity(UnAssignPhoneNumCallQueueSecurity security) {
        this.security = security;
        return this;
    }
}