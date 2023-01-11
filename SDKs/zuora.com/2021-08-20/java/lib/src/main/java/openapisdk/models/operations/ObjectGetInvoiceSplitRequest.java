package openapisdk.models.operations;



public class ObjectGetInvoiceSplitRequest {
    public ObjectGetInvoiceSplitPathParams pathParams;
    public ObjectGetInvoiceSplitRequest withPathParams(ObjectGetInvoiceSplitPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetInvoiceSplitQueryParams queryParams;
    public ObjectGetInvoiceSplitRequest withQueryParams(ObjectGetInvoiceSplitQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetInvoiceSplitHeaders headers;
    public ObjectGetInvoiceSplitRequest withHeaders(ObjectGetInvoiceSplitHeaders headers) {
        this.headers = headers;
        return this;
    }
}