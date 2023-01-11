package openapisdk.models.operations;



public class GetZrLocationProfileRequest {
    public GetZrLocationProfilePathParams pathParams;
    public GetZrLocationProfileRequest withPathParams(GetZrLocationProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetZrLocationProfileSecurity security;
    public GetZrLocationProfileRequest withSecurity(GetZrLocationProfileSecurity security) {
        this.security = security;
        return this;
    }
}