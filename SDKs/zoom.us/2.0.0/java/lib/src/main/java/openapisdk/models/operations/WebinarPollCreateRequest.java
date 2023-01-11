package openapisdk.models.operations;



public class WebinarPollCreateRequest {
    public WebinarPollCreatePathParams pathParams;
    public WebinarPollCreateRequest withPathParams(WebinarPollCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebinarPollCreateRequests request;
    public WebinarPollCreateRequest withRequest(WebinarPollCreateRequests request) {
        this.request = request;
        return this;
    }
    public WebinarPollCreateSecurity security;
    public WebinarPollCreateRequest withSecurity(WebinarPollCreateSecurity security) {
        this.security = security;
        return this;
    }
}