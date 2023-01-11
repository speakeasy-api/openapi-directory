package openapisdk.models.operations;



public class ObjectGetInvoicePaymentRequest {
    public ObjectGetInvoicePaymentPathParams pathParams;
    public ObjectGetInvoicePaymentRequest withPathParams(ObjectGetInvoicePaymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetInvoicePaymentQueryParams queryParams;
    public ObjectGetInvoicePaymentRequest withQueryParams(ObjectGetInvoicePaymentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetInvoicePaymentHeaders headers;
    public ObjectGetInvoicePaymentRequest withHeaders(ObjectGetInvoicePaymentHeaders headers) {
        this.headers = headers;
        return this;
    }
}