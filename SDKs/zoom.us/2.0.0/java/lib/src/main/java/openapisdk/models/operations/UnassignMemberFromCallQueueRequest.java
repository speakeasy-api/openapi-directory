package openapisdk.models.operations;



public class UnassignMemberFromCallQueueRequest {
    public UnassignMemberFromCallQueuePathParams pathParams;
    public UnassignMemberFromCallQueueRequest withPathParams(UnassignMemberFromCallQueuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UnassignMemberFromCallQueueSecurity security;
    public UnassignMemberFromCallQueueRequest withSecurity(UnassignMemberFromCallQueueSecurity security) {
        this.security = security;
        return this;
    }
}