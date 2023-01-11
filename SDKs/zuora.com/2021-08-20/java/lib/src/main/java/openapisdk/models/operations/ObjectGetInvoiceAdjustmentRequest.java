package openapisdk.models.operations;



public class ObjectGetInvoiceAdjustmentRequest {
    public ObjectGetInvoiceAdjustmentPathParams pathParams;
    public ObjectGetInvoiceAdjustmentRequest withPathParams(ObjectGetInvoiceAdjustmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetInvoiceAdjustmentQueryParams queryParams;
    public ObjectGetInvoiceAdjustmentRequest withQueryParams(ObjectGetInvoiceAdjustmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetInvoiceAdjustmentHeaders headers;
    public ObjectGetInvoiceAdjustmentRequest withHeaders(ObjectGetInvoiceAdjustmentHeaders headers) {
        this.headers = headers;
        return this;
    }
}