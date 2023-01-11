package openapisdk.models.operations;



public class GetRsRequest {
    public GetRsPathParams pathParams;
    public GetRsRequest withPathParams(GetRsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRsHeaders headers;
    public GetRsRequest withHeaders(GetRsHeaders headers) {
        this.headers = headers;
        return this;
    }
}