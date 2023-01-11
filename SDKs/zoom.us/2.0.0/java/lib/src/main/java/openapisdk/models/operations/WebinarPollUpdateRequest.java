package openapisdk.models.operations;



public class WebinarPollUpdateRequest {
    public WebinarPollUpdatePathParams pathParams;
    public WebinarPollUpdateRequest withPathParams(WebinarPollUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebinarPollUpdateRequests request;
    public WebinarPollUpdateRequest withRequest(WebinarPollUpdateRequests request) {
        this.request = request;
        return this;
    }
    public WebinarPollUpdateSecurity security;
    public WebinarPollUpdateRequest withSecurity(WebinarPollUpdateSecurity security) {
        this.security = security;
        return this;
    }
}