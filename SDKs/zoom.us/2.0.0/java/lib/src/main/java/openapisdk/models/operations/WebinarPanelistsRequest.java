package openapisdk.models.operations;



public class WebinarPanelistsRequest {
    public WebinarPanelistsPathParams pathParams;
    public WebinarPanelistsRequest withPathParams(WebinarPanelistsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebinarPanelistsSecurity security;
    public WebinarPanelistsRequest withSecurity(WebinarPanelistsSecurity security) {
        this.security = security;
        return this;
    }
}