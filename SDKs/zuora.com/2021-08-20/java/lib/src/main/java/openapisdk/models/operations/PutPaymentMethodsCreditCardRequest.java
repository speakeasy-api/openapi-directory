package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPaymentMethodsCreditCardRequest {
    public PutPaymentMethodsCreditCardPathParams pathParams;
    public PutPaymentMethodsCreditCardRequest withPathParams(PutPaymentMethodsCreditCardPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutPaymentMethodsCreditCardHeaders headers;
    public PutPaymentMethodsCreditCardRequest withHeaders(PutPaymentMethodsCreditCardHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutPaymentMethodsCreditCardRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}