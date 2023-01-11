package openapisdk.models.operations;



public class GetTransactionsRequest {
    public GetTransactionsPathParams pathParams;
    public GetTransactionsRequest withPathParams(GetTransactionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTransactionsQueryParams queryParams;
    public GetTransactionsRequest withQueryParams(GetTransactionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}