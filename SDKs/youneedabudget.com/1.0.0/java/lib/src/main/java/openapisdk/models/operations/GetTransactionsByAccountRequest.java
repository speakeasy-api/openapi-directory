package openapisdk.models.operations;



public class GetTransactionsByAccountRequest {
    public GetTransactionsByAccountPathParams pathParams;
    public GetTransactionsByAccountRequest withPathParams(GetTransactionsByAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTransactionsByAccountQueryParams queryParams;
    public GetTransactionsByAccountRequest withQueryParams(GetTransactionsByAccountQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}