package openapisdk.models.operations;



public class ObjectGetInvoiceItemRequest {
    public ObjectGetInvoiceItemPathParams pathParams;
    public ObjectGetInvoiceItemRequest withPathParams(ObjectGetInvoiceItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetInvoiceItemQueryParams queryParams;
    public ObjectGetInvoiceItemRequest withQueryParams(ObjectGetInvoiceItemQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetInvoiceItemHeaders headers;
    public ObjectGetInvoiceItemRequest withHeaders(ObjectGetInvoiceItemHeaders headers) {
        this.headers = headers;
        return this;
    }
}