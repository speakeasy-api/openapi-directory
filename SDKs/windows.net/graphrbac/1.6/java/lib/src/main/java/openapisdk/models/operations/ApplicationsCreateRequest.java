package openapisdk.models.operations;



public class ApplicationsCreateRequest {
    public ApplicationsCreatePathParams pathParams;
    public ApplicationsCreateRequest withPathParams(ApplicationsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApplicationsCreateQueryParams queryParams;
    public ApplicationsCreateRequest withQueryParams(ApplicationsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ApplicationsCreateRequests request;
    public ApplicationsCreateRequest withRequest(ApplicationsCreateRequests request) {
        this.request = request;
        return this;
    }
}