package openapisdk.models.operations;



public class WebinarPollsRequest {
    public WebinarPollsPathParams pathParams;
    public WebinarPollsRequest withPathParams(WebinarPollsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebinarPollsSecurity security;
    public WebinarPollsRequest withSecurity(WebinarPollsSecurity security) {
        this.security = security;
        return this;
    }
}