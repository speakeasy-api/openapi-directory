package openapisdk.models.operations;



public class GetPayRunRequest {
    public GetPayRunPathParams pathParams;
    public GetPayRunRequest withPathParams(GetPayRunPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPayRunHeaders headers;
    public GetPayRunRequest withHeaders(GetPayRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetPayRunSecurity security;
    public GetPayRunRequest withSecurity(GetPayRunSecurity security) {
        this.security = security;
        return this;
    }
}