package openapisdk.models.operations;



public class GetUserContactRequest {
    public GetUserContactPathParams pathParams;
    public GetUserContactRequest withPathParams(GetUserContactPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUserContactQueryParams queryParams;
    public GetUserContactRequest withQueryParams(GetUserContactQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUserContactSecurity security;
    public GetUserContactRequest withSecurity(GetUserContactSecurity security) {
        this.security = security;
        return this;
    }
}