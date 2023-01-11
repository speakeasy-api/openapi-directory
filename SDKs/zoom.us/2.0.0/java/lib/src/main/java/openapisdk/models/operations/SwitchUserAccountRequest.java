package openapisdk.models.operations;



public class SwitchUserAccountRequest {
    public SwitchUserAccountPathParams pathParams;
    public SwitchUserAccountRequest withPathParams(SwitchUserAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SwitchUserAccountRequests request;
    public SwitchUserAccountRequest withRequest(SwitchUserAccountRequests request) {
        this.request = request;
        return this;
    }
    public SwitchUserAccountSecurity security;
    public SwitchUserAccountRequest withSecurity(SwitchUserAccountSecurity security) {
        this.security = security;
        return this;
    }
}