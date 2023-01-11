package openapisdk.models.operations;



public class WebinarPanelistCreateRequest {
    public WebinarPanelistCreatePathParams pathParams;
    public WebinarPanelistCreateRequest withPathParams(WebinarPanelistCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebinarPanelistCreateRequests request;
    public WebinarPanelistCreateRequest withRequest(WebinarPanelistCreateRequests request) {
        this.request = request;
        return this;
    }
    public WebinarPanelistCreateSecurity security;
    public WebinarPanelistCreateRequest withSecurity(WebinarPanelistCreateSecurity security) {
        this.security = security;
        return this;
    }
}