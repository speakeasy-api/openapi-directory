package openapisdk.models.operations;



public class UnassignAPhoneNumCallQueueRequest {
    public UnassignAPhoneNumCallQueuePathParams pathParams;
    public UnassignAPhoneNumCallQueueRequest withPathParams(UnassignAPhoneNumCallQueuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UnassignAPhoneNumCallQueueSecurity security;
    public UnassignAPhoneNumCallQueueRequest withSecurity(UnassignAPhoneNumCallQueueSecurity security) {
        this.security = security;
        return this;
    }
}