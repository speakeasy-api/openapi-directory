package openapisdk.models.operations;



public class GetPotTransactionsRequest {
    public GetPotTransactionsPathParams pathParams;
    public GetPotTransactionsRequest withPathParams(GetPotTransactionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPotTransactionsQueryParams queryParams;
    public GetPotTransactionsRequest withQueryParams(GetPotTransactionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPotTransactionsHeaders headers;
    public GetPotTransactionsRequest withHeaders(GetPotTransactionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetPotTransactionsSecurity security;
    public GetPotTransactionsRequest withSecurity(GetPotTransactionsSecurity security) {
        this.security = security;
        return this;
    }
}