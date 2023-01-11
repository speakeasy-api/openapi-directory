package openapisdk.models.operations;



public class GetTaxationItemsOfInvoiceItemRequest {
    public GetTaxationItemsOfInvoiceItemPathParams pathParams;
    public GetTaxationItemsOfInvoiceItemRequest withPathParams(GetTaxationItemsOfInvoiceItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTaxationItemsOfInvoiceItemQueryParams queryParams;
    public GetTaxationItemsOfInvoiceItemRequest withQueryParams(GetTaxationItemsOfInvoiceItemQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTaxationItemsOfInvoiceItemHeaders headers;
    public GetTaxationItemsOfInvoiceItemRequest withHeaders(GetTaxationItemsOfInvoiceItemHeaders headers) {
        this.headers = headers;
        return this;
    }
}