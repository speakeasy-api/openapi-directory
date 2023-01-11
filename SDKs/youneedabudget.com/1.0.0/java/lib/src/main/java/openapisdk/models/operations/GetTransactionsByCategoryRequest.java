package openapisdk.models.operations;



public class GetTransactionsByCategoryRequest {
    public GetTransactionsByCategoryPathParams pathParams;
    public GetTransactionsByCategoryRequest withPathParams(GetTransactionsByCategoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTransactionsByCategoryQueryParams queryParams;
    public GetTransactionsByCategoryRequest withQueryParams(GetTransactionsByCategoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}