package openapisdk.models.operations;



public class WebinarPollGetRequest {
    public WebinarPollGetPathParams pathParams;
    public WebinarPollGetRequest withPathParams(WebinarPollGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebinarPollGetSecurity security;
    public WebinarPollGetRequest withSecurity(WebinarPollGetSecurity security) {
        this.security = security;
        return this;
    }
}