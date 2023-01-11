package openapisdk.models.operations;



public class ApplicationListRequest {
    public ApplicationListQueryParams queryParams;
    public ApplicationListRequest withQueryParams(ApplicationListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ApplicationListHeaders headers;
    public ApplicationListRequest withHeaders(ApplicationListHeaders headers) {
        this.headers = headers;
        return this;
    }
}