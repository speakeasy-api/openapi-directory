package openapisdk.models.operations;



public class WebinarDeleteRequest {
    public WebinarDeletePathParams pathParams;
    public WebinarDeleteRequest withPathParams(WebinarDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebinarDeleteQueryParams queryParams;
    public WebinarDeleteRequest withQueryParams(WebinarDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public WebinarDeleteSecurity security;
    public WebinarDeleteRequest withSecurity(WebinarDeleteSecurity security) {
        this.security = security;
        return this;
    }
}