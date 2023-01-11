package openapisdk.models.operations;



public class DeletePaymentRequest {
    public DeletePaymentPathParams pathParams;
    public DeletePaymentRequest withPathParams(DeletePaymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeletePaymentHeaders headers;
    public DeletePaymentRequest withHeaders(DeletePaymentHeaders headers) {
        this.headers = headers;
        return this;
    }
}