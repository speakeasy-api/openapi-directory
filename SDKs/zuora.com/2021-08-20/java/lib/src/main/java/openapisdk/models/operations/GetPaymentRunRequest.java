package openapisdk.models.operations;



public class GetPaymentRunRequest {
    public GetPaymentRunPathParams pathParams;
    public GetPaymentRunRequest withPathParams(GetPaymentRunPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPaymentRunHeaders headers;
    public GetPaymentRunRequest withHeaders(GetPaymentRunHeaders headers) {
        this.headers = headers;
        return this;
    }
}