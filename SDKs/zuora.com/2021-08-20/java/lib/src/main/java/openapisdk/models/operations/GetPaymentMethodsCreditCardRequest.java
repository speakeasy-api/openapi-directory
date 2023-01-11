package openapisdk.models.operations;



public class GetPaymentMethodsCreditCardRequest {
    public GetPaymentMethodsCreditCardPathParams pathParams;
    public GetPaymentMethodsCreditCardRequest withPathParams(GetPaymentMethodsCreditCardPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPaymentMethodsCreditCardQueryParams queryParams;
    public GetPaymentMethodsCreditCardRequest withQueryParams(GetPaymentMethodsCreditCardQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPaymentMethodsCreditCardHeaders headers;
    public GetPaymentMethodsCreditCardRequest withHeaders(GetPaymentMethodsCreditCardHeaders headers) {
        this.headers = headers;
        return this;
    }
}