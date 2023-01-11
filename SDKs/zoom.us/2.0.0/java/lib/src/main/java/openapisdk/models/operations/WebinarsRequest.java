package openapisdk.models.operations;



public class WebinarsRequest {
    public WebinarsPathParams pathParams;
    public WebinarsRequest withPathParams(WebinarsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebinarsQueryParams queryParams;
    public WebinarsRequest withQueryParams(WebinarsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public WebinarsSecurity security;
    public WebinarsRequest withSecurity(WebinarsSecurity security) {
        this.security = security;
        return this;
    }
}