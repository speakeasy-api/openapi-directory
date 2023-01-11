package openapisdk.models.operations;



public class GetUserContactsRequest {
    public GetUserContactsQueryParams queryParams;
    public GetUserContactsRequest withQueryParams(GetUserContactsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUserContactsSecurity security;
    public GetUserContactsRequest withSecurity(GetUserContactsSecurity security) {
        this.security = security;
        return this;
    }
}