package openapisdk.models.operations;



public class GetFileRequest {
    public GetFilePathParams pathParams;
    public GetFileRequest withPathParams(GetFilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetFileHeaders headers;
    public GetFileRequest withHeaders(GetFileHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetFileSecurity security;
    public GetFileRequest withSecurity(GetFileSecurity security) {
        this.security = security;
        return this;
    }
}