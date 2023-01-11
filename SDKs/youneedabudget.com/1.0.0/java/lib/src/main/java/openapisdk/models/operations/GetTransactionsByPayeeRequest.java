package openapisdk.models.operations;



public class GetTransactionsByPayeeRequest {
    public GetTransactionsByPayeePathParams pathParams;
    public GetTransactionsByPayeeRequest withPathParams(GetTransactionsByPayeePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTransactionsByPayeeQueryParams queryParams;
    public GetTransactionsByPayeeRequest withQueryParams(GetTransactionsByPayeeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}