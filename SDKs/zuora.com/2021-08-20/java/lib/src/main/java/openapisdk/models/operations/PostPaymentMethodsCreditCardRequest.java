package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPaymentMethodsCreditCardRequest {
    public PostPaymentMethodsCreditCardHeaders headers;
    public PostPaymentMethodsCreditCardRequest withHeaders(PostPaymentMethodsCreditCardHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostPaymentMethodsCreditCardRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}