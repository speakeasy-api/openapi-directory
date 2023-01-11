package openapisdk.models.operations;



public class WebinarRequest {
    public WebinarPathParams pathParams;
    public WebinarRequest withPathParams(WebinarPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebinarQueryParams queryParams;
    public WebinarRequest withQueryParams(WebinarQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public WebinarSecurity security;
    public WebinarRequest withSecurity(WebinarSecurity security) {
        this.security = security;
        return this;
    }
}