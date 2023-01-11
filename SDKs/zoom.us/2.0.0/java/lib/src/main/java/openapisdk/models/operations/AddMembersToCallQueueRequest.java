package openapisdk.models.operations;



public class AddMembersToCallQueueRequest {
    public AddMembersToCallQueuePathParams pathParams;
    public AddMembersToCallQueueRequest withPathParams(AddMembersToCallQueuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddMembersToCallQueueRequests request;
    public AddMembersToCallQueueRequest withRequest(AddMembersToCallQueueRequests request) {
        this.request = request;
        return this;
    }
    public AddMembersToCallQueueSecurity security;
    public AddMembersToCallQueueRequest withSecurity(AddMembersToCallQueueSecurity security) {
        this.security = security;
        return this;
    }
}