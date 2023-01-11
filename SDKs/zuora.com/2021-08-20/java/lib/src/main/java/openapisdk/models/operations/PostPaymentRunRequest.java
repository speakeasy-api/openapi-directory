package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPaymentRunRequest {
    public PostPaymentRunHeaders headers;
    public PostPaymentRunRequest withHeaders(PostPaymentRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostPaymentRunRequest request;
    public PostPaymentRunRequest withRequest(openapisdk.models.shared.PostPaymentRunRequest request) {
        this.request = request;
        return this;
    }
}