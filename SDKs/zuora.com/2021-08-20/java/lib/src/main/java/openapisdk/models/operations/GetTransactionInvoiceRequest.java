package openapisdk.models.operations;



public class GetTransactionInvoiceRequest {
    public GetTransactionInvoicePathParams pathParams;
    public GetTransactionInvoiceRequest withPathParams(GetTransactionInvoicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTransactionInvoiceQueryParams queryParams;
    public GetTransactionInvoiceRequest withQueryParams(GetTransactionInvoiceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTransactionInvoiceHeaders headers;
    public GetTransactionInvoiceRequest withHeaders(GetTransactionInvoiceHeaders headers) {
        this.headers = headers;
        return this;
    }
}