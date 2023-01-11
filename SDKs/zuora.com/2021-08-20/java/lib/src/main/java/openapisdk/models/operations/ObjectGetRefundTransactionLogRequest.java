package openapisdk.models.operations;



public class ObjectGetRefundTransactionLogRequest {
    public ObjectGetRefundTransactionLogPathParams pathParams;
    public ObjectGetRefundTransactionLogRequest withPathParams(ObjectGetRefundTransactionLogPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetRefundTransactionLogQueryParams queryParams;
    public ObjectGetRefundTransactionLogRequest withQueryParams(ObjectGetRefundTransactionLogQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetRefundTransactionLogHeaders headers;
    public ObjectGetRefundTransactionLogRequest withHeaders(ObjectGetRefundTransactionLogHeaders headers) {
        this.headers = headers;
        return this;
    }
}