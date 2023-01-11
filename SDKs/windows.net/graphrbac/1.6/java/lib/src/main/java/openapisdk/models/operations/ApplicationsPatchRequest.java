package openapisdk.models.operations;



public class ApplicationsPatchRequest {
    public ApplicationsPatchPathParams pathParams;
    public ApplicationsPatchRequest withPathParams(ApplicationsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApplicationsPatchQueryParams queryParams;
    public ApplicationsPatchRequest withQueryParams(ApplicationsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ApplicationsPatchRequests request;
    public ApplicationsPatchRequest withRequest(ApplicationsPatchRequests request) {
        this.request = request;
        return this;
    }
}