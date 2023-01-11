package openapisdk.models.operations;



public class ObjectGetPaymentMethodTransactionLogRequest {
    public ObjectGetPaymentMethodTransactionLogPathParams pathParams;
    public ObjectGetPaymentMethodTransactionLogRequest withPathParams(ObjectGetPaymentMethodTransactionLogPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetPaymentMethodTransactionLogQueryParams queryParams;
    public ObjectGetPaymentMethodTransactionLogRequest withQueryParams(ObjectGetPaymentMethodTransactionLogQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetPaymentMethodTransactionLogHeaders headers;
    public ObjectGetPaymentMethodTransactionLogRequest withHeaders(ObjectGetPaymentMethodTransactionLogHeaders headers) {
        this.headers = headers;
        return this;
    }
}