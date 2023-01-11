package openapisdk.models.operations;



public class GetZrProfileRequest {
    public GetZrProfilePathParams pathParams;
    public GetZrProfileRequest withPathParams(GetZrProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetZrProfileSecurity security;
    public GetZrProfileRequest withSecurity(GetZrProfileSecurity security) {
        this.security = security;
        return this;
    }
}