package openapisdk.models.operations;



public class GetinvestorAccountRequest {
    public GetinvestorAccountPathParams pathParams;
    public GetinvestorAccountRequest withPathParams(GetinvestorAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetinvestorAccountHeaders headers;
    public GetinvestorAccountRequest withHeaders(GetinvestorAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetinvestorAccountSecurity security;
    public GetinvestorAccountRequest withSecurity(GetinvestorAccountSecurity security) {
        this.security = security;
        return this;
    }
}