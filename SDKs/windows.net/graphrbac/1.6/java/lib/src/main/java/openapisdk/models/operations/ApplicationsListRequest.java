package openapisdk.models.operations;



public class ApplicationsListRequest {
    public ApplicationsListPathParams pathParams;
    public ApplicationsListRequest withPathParams(ApplicationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApplicationsListQueryParams queryParams;
    public ApplicationsListRequest withQueryParams(ApplicationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}