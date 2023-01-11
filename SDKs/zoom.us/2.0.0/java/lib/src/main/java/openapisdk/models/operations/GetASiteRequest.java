package openapisdk.models.operations;



public class GetASiteRequest {
    public GetASitePathParams pathParams;
    public GetASiteRequest withPathParams(GetASitePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetASiteSecurity security;
    public GetASiteRequest withSecurity(GetASiteSecurity security) {
        this.security = security;
        return this;
    }
}