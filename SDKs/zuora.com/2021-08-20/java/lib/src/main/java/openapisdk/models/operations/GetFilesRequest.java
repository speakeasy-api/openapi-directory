package openapisdk.models.operations;



public class GetFilesRequest {
    public GetFilesPathParams pathParams;
    public GetFilesRequest withPathParams(GetFilesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetFilesHeaders headers;
    public GetFilesRequest withHeaders(GetFilesHeaders headers) {
        this.headers = headers;
        return this;
    }
}