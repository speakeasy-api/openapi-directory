package openapisdk.models.operations;



public class SetUpAccountRequest {
    public SetUpAccountPathParams pathParams;
    public SetUpAccountRequest withPathParams(SetUpAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SetUpAccountRequests request;
    public SetUpAccountRequest withRequest(SetUpAccountRequests request) {
        this.request = request;
        return this;
    }
    public SetUpAccountSecurity security;
    public SetUpAccountRequest withSecurity(SetUpAccountSecurity security) {
        this.security = security;
        return this;
    }
}