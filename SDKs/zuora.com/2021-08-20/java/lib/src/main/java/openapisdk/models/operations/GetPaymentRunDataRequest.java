package openapisdk.models.operations;



public class GetPaymentRunDataRequest {
    public GetPaymentRunDataPathParams pathParams;
    public GetPaymentRunDataRequest withPathParams(GetPaymentRunDataPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPaymentRunDataHeaders headers;
    public GetPaymentRunDataRequest withHeaders(GetPaymentRunDataHeaders headers) {
        this.headers = headers;
        return this;
    }
}