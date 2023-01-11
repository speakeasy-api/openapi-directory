package openapisdk.models.operations;



public class GetPaymentMethodRequest {
    public GetPaymentMethodPathParams pathParams;
    public GetPaymentMethodRequest withPathParams(GetPaymentMethodPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPaymentMethodHeaders headers;
    public GetPaymentMethodRequest withHeaders(GetPaymentMethodHeaders headers) {
        this.headers = headers;
        return this;
    }
}