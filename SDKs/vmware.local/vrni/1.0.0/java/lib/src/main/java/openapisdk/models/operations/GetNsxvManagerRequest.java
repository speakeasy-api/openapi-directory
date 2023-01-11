package openapisdk.models.operations;



public class GetNsxvManagerRequest {
    public GetNsxvManagerPathParams pathParams;
    public GetNsxvManagerRequest withPathParams(GetNsxvManagerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetNsxvManagerSecurity security;
    public GetNsxvManagerRequest withSecurity(GetNsxvManagerSecurity security) {
        this.security = security;
        return this;
    }
}