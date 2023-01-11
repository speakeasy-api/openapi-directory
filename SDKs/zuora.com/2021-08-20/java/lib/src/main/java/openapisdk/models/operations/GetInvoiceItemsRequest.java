package openapisdk.models.operations;



public class GetInvoiceItemsRequest {
    public GetInvoiceItemsPathParams pathParams;
    public GetInvoiceItemsRequest withPathParams(GetInvoiceItemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetInvoiceItemsQueryParams queryParams;
    public GetInvoiceItemsRequest withQueryParams(GetInvoiceItemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetInvoiceItemsHeaders headers;
    public GetInvoiceItemsRequest withHeaders(GetInvoiceItemsHeaders headers) {
        this.headers = headers;
        return this;
    }
}