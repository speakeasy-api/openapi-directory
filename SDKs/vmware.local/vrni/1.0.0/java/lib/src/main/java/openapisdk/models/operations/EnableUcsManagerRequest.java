package openapisdk.models.operations;



public class EnableUcsManagerRequest {
    public EnableUcsManagerPathParams pathParams;
    public EnableUcsManagerRequest withPathParams(EnableUcsManagerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EnableUcsManagerSecurity security;
    public EnableUcsManagerRequest withSecurity(EnableUcsManagerSecurity security) {
        this.security = security;
        return this;
    }
}