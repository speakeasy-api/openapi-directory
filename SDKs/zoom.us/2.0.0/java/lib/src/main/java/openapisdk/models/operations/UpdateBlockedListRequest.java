package openapisdk.models.operations;



public class UpdateBlockedListRequest {
    public UpdateBlockedListPathParams pathParams;
    public UpdateBlockedListRequest withPathParams(UpdateBlockedListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateBlockedListRequests request;
    public UpdateBlockedListRequest withRequest(UpdateBlockedListRequests request) {
        this.request = request;
        return this;
    }
    public UpdateBlockedListSecurity security;
    public UpdateBlockedListRequest withSecurity(UpdateBlockedListSecurity security) {
        this.security = security;
        return this;
    }
}