package openapisdk.models.operations;



public class ObjectGetRefundRequest {
    public ObjectGetRefundPathParams pathParams;
    public ObjectGetRefundRequest withPathParams(ObjectGetRefundPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetRefundQueryParams queryParams;
    public ObjectGetRefundRequest withQueryParams(ObjectGetRefundQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetRefundHeaders headers;
    public ObjectGetRefundRequest withHeaders(ObjectGetRefundHeaders headers) {
        this.headers = headers;
        return this;
    }
}