package openapisdk.models.operations;



public class GetAccountRequest {
    public GetAccountPathParams pathParams;
    public GetAccountRequest withPathParams(GetAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAccountQueryParams queryParams;
    public GetAccountRequest withQueryParams(GetAccountQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}