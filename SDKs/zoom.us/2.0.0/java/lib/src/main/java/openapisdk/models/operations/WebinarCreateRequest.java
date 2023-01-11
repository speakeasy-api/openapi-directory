package openapisdk.models.operations;



public class WebinarCreateRequest {
    public WebinarCreatePathParams pathParams;
    public WebinarCreateRequest withPathParams(WebinarCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebinarCreateRequests request;
    public WebinarCreateRequest withRequest(WebinarCreateRequests request) {
        this.request = request;
        return this;
    }
    public WebinarCreateSecurity security;
    public WebinarCreateRequest withSecurity(WebinarCreateSecurity security) {
        this.security = security;
        return this;
    }
}