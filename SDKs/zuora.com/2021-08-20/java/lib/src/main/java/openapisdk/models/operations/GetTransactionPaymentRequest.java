package openapisdk.models.operations;



public class GetTransactionPaymentRequest {
    public GetTransactionPaymentPathParams pathParams;
    public GetTransactionPaymentRequest withPathParams(GetTransactionPaymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTransactionPaymentQueryParams queryParams;
    public GetTransactionPaymentRequest withQueryParams(GetTransactionPaymentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTransactionPaymentHeaders headers;
    public GetTransactionPaymentRequest withHeaders(GetTransactionPaymentHeaders headers) {
        this.headers = headers;
        return this;
    }
}