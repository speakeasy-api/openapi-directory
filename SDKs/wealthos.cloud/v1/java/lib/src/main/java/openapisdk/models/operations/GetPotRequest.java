package openapisdk.models.operations;



public class GetPotRequest {
    public GetPotPathParams pathParams;
    public GetPotRequest withPathParams(GetPotPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPotHeaders headers;
    public GetPotRequest withHeaders(GetPotHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetPotSecurity security;
    public GetPotRequest withSecurity(GetPotSecurity security) {
        this.security = security;
        return this;
    }
}