package openapisdk.models.operations;



public class GetHpvcManagerRequest {
    public GetHpvcManagerPathParams pathParams;
    public GetHpvcManagerRequest withPathParams(GetHpvcManagerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetHpvcManagerSecurity security;
    public GetHpvcManagerRequest withSecurity(GetHpvcManagerSecurity security) {
        this.security = security;
        return this;
    }
}