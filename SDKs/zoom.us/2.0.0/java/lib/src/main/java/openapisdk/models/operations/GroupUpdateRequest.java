package openapisdk.models.operations;



public class GroupUpdateRequest {
    public GroupUpdatePathParams pathParams;
    public GroupUpdateRequest withPathParams(GroupUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GroupUpdateRequests request;
    public GroupUpdateRequest withRequest(GroupUpdateRequests request) {
        this.request = request;
        return this;
    }
    public GroupUpdateSecurity security;
    public GroupUpdateRequest withSecurity(GroupUpdateSecurity security) {
        this.security = security;
        return this;
    }
}