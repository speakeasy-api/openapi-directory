package openapisdk.models.operations;



public class WebinarStatusRequest {
    public WebinarStatusPathParams pathParams;
    public WebinarStatusRequest withPathParams(WebinarStatusPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebinarStatusRequests request;
    public WebinarStatusRequest withRequest(WebinarStatusRequests request) {
        this.request = request;
        return this;
    }
    public WebinarStatusSecurity security;
    public WebinarStatusRequest withSecurity(WebinarStatusSecurity security) {
        this.security = security;
        return this;
    }
}