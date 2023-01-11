package openapisdk.models.operations;



public class ApplicationsGetRequest {
    public ApplicationsGetPathParams pathParams;
    public ApplicationsGetRequest withPathParams(ApplicationsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApplicationsGetQueryParams queryParams;
    public ApplicationsGetRequest withQueryParams(ApplicationsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}