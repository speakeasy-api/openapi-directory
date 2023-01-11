package openapisdk.models.operations;



public class GetPaymentPartRequest {
    public GetPaymentPartPathParams pathParams;
    public GetPaymentPartRequest withPathParams(GetPaymentPartPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPaymentPartHeaders headers;
    public GetPaymentPartRequest withHeaders(GetPaymentPartHeaders headers) {
        this.headers = headers;
        return this;
    }
}