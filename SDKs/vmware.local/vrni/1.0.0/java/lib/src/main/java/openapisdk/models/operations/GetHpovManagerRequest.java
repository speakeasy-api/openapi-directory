package openapisdk.models.operations;



public class GetHpovManagerRequest {
    public GetHpovManagerPathParams pathParams;
    public GetHpovManagerRequest withPathParams(GetHpovManagerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetHpovManagerSecurity security;
    public GetHpovManagerRequest withSecurity(GetHpovManagerSecurity security) {
        this.security = security;
        return this;
    }
}