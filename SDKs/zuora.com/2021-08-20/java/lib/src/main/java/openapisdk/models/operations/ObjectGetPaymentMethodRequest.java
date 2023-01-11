package openapisdk.models.operations;



public class ObjectGetPaymentMethodRequest {
    public ObjectGetPaymentMethodPathParams pathParams;
    public ObjectGetPaymentMethodRequest withPathParams(ObjectGetPaymentMethodPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetPaymentMethodQueryParams queryParams;
    public ObjectGetPaymentMethodRequest withQueryParams(ObjectGetPaymentMethodQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetPaymentMethodHeaders headers;
    public ObjectGetPaymentMethodRequest withHeaders(ObjectGetPaymentMethodHeaders headers) {
        this.headers = headers;
        return this;
    }
}