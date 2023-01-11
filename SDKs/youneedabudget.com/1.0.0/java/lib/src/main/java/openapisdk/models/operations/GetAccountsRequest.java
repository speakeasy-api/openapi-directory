package openapisdk.models.operations;



public class GetAccountsRequest {
    public GetAccountsPathParams pathParams;
    public GetAccountsRequest withPathParams(GetAccountsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAccountsQueryParams queryParams;
    public GetAccountsRequest withQueryParams(GetAccountsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}