package openapisdk.models.operations;



public class WebinarRegistrantStatusRequest {
    public WebinarRegistrantStatusPathParams pathParams;
    public WebinarRegistrantStatusRequest withPathParams(WebinarRegistrantStatusPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebinarRegistrantStatusQueryParams queryParams;
    public WebinarRegistrantStatusRequest withQueryParams(WebinarRegistrantStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public WebinarRegistrantStatusRequests request;
    public WebinarRegistrantStatusRequest withRequest(WebinarRegistrantStatusRequests request) {
        this.request = request;
        return this;
    }
    public WebinarRegistrantStatusSecurity security;
    public WebinarRegistrantStatusRequest withSecurity(WebinarRegistrantStatusSecurity security) {
        this.security = security;
        return this;
    }
}