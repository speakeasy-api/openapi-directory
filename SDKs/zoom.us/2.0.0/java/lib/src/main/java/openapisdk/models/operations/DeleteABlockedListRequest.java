package openapisdk.models.operations;



public class DeleteABlockedListRequest {
    public DeleteABlockedListPathParams pathParams;
    public DeleteABlockedListRequest withPathParams(DeleteABlockedListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteABlockedListSecurity security;
    public DeleteABlockedListRequest withSecurity(DeleteABlockedListSecurity security) {
        this.security = security;
        return this;
    }
}