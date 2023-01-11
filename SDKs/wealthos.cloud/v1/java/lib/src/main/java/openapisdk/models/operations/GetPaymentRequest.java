package openapisdk.models.operations;



public class GetPaymentRequest {
    public GetPaymentPathParams pathParams;
    public GetPaymentRequest withPathParams(GetPaymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPaymentHeaders headers;
    public GetPaymentRequest withHeaders(GetPaymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetPaymentSecurity security;
    public GetPaymentRequest withSecurity(GetPaymentSecurity security) {
        this.security = security;
        return this;
    }
}