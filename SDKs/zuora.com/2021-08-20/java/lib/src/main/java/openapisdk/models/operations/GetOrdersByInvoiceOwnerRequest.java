package openapisdk.models.operations;



public class GetOrdersByInvoiceOwnerRequest {
    public GetOrdersByInvoiceOwnerPathParams pathParams;
    public GetOrdersByInvoiceOwnerRequest withPathParams(GetOrdersByInvoiceOwnerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetOrdersByInvoiceOwnerQueryParams queryParams;
    public GetOrdersByInvoiceOwnerRequest withQueryParams(GetOrdersByInvoiceOwnerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetOrdersByInvoiceOwnerHeaders headers;
    public GetOrdersByInvoiceOwnerRequest withHeaders(GetOrdersByInvoiceOwnerHeaders headers) {
        this.headers = headers;
        return this;
    }
}