package openapisdk.models.operations;



public class ObjectGetPaymentRequest {
    public ObjectGetPaymentPathParams pathParams;
    public ObjectGetPaymentRequest withPathParams(ObjectGetPaymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetPaymentHeaders headers;
    public ObjectGetPaymentRequest withHeaders(ObjectGetPaymentHeaders headers) {
        this.headers = headers;
        return this;
    }
}