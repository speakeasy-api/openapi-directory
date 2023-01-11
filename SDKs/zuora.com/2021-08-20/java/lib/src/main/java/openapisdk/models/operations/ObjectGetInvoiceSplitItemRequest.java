package openapisdk.models.operations;



public class ObjectGetInvoiceSplitItemRequest {
    public ObjectGetInvoiceSplitItemPathParams pathParams;
    public ObjectGetInvoiceSplitItemRequest withPathParams(ObjectGetInvoiceSplitItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetInvoiceSplitItemQueryParams queryParams;
    public ObjectGetInvoiceSplitItemRequest withQueryParams(ObjectGetInvoiceSplitItemQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetInvoiceSplitItemHeaders headers;
    public ObjectGetInvoiceSplitItemRequest withHeaders(ObjectGetInvoiceSplitItemHeaders headers) {
        this.headers = headers;
        return this;
    }
}