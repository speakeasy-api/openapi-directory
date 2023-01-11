package openapisdk.models.operations;



public class ApplicationGetRequest {
    public ApplicationGetPathParams pathParams;
    public ApplicationGetRequest withPathParams(ApplicationGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApplicationGetQueryParams queryParams;
    public ApplicationGetRequest withQueryParams(ApplicationGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ApplicationGetHeaders headers;
    public ApplicationGetRequest withHeaders(ApplicationGetHeaders headers) {
        this.headers = headers;
        return this;
    }
}