package openapisdk.models.operations;



public class GetDefinitionsRequest {
    public GetDefinitionsPathParams pathParams;
    public GetDefinitionsRequest withPathParams(GetDefinitionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDefinitionsQueryParams queryParams;
    public GetDefinitionsRequest withQueryParams(GetDefinitionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}