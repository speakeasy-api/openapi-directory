package openapisdk.models.operations;



public class GetUcsManagerRequest {
    public GetUcsManagerPathParams pathParams;
    public GetUcsManagerRequest withPathParams(GetUcsManagerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUcsManagerSecurity security;
    public GetUcsManagerRequest withSecurity(GetUcsManagerSecurity security) {
        this.security = security;
        return this;
    }
}