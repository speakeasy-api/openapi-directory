package openapisdk.models.operations;



public class GetFilesRequest {
    public GetFilesQueryParams queryParams;
    public GetFilesRequest withQueryParams(GetFilesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFilesHeaders headers;
    public GetFilesRequest withHeaders(GetFilesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetFilesSecurity security;
    public GetFilesRequest withSecurity(GetFilesSecurity security) {
        this.security = security;
        return this;
    }
}