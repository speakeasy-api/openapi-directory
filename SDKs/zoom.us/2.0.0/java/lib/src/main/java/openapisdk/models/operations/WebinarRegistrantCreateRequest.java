package openapisdk.models.operations;



public class WebinarRegistrantCreateRequest {
    public WebinarRegistrantCreatePathParams pathParams;
    public WebinarRegistrantCreateRequest withPathParams(WebinarRegistrantCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebinarRegistrantCreateQueryParams queryParams;
    public WebinarRegistrantCreateRequest withQueryParams(WebinarRegistrantCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public WebinarRegistrantCreateRequests request;
    public WebinarRegistrantCreateRequest withRequest(WebinarRegistrantCreateRequests request) {
        this.request = request;
        return this;
    }
    public WebinarRegistrantCreateSecurity security;
    public WebinarRegistrantCreateRequest withSecurity(WebinarRegistrantCreateSecurity security) {
        this.security = security;
        return this;
    }
}