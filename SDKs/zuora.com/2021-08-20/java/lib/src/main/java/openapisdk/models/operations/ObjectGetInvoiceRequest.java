package openapisdk.models.operations;



public class ObjectGetInvoiceRequest {
    public ObjectGetInvoicePathParams pathParams;
    public ObjectGetInvoiceRequest withPathParams(ObjectGetInvoicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetInvoiceQueryParams queryParams;
    public ObjectGetInvoiceRequest withQueryParams(ObjectGetInvoiceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetInvoiceHeaders headers;
    public ObjectGetInvoiceRequest withHeaders(ObjectGetInvoiceHeaders headers) {
        this.headers = headers;
        return this;
    }
}