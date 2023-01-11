package openapisdk.models.operations;



public class GetABlockedListRequest {
    public GetABlockedListPathParams pathParams;
    public GetABlockedListRequest withPathParams(GetABlockedListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetABlockedListSecurity security;
    public GetABlockedListRequest withSecurity(GetABlockedListSecurity security) {
        this.security = security;
        return this;
    }
}