package openapisdk.models.operations;



public class WebinarUpdateRequest {
    public WebinarUpdatePathParams pathParams;
    public WebinarUpdateRequest withPathParams(WebinarUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebinarUpdateQueryParams queryParams;
    public WebinarUpdateRequest withQueryParams(WebinarUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public WebinarUpdateRequests request;
    public WebinarUpdateRequest withRequest(WebinarUpdateRequests request) {
        this.request = request;
        return this;
    }
    public WebinarUpdateSecurity security;
    public WebinarUpdateRequest withSecurity(WebinarUpdateSecurity security) {
        this.security = security;
        return this;
    }
}