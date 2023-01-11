package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReversePaymentRequest {
    public PostReversePaymentPathParams pathParams;
    public PostReversePaymentRequest withPathParams(PostReversePaymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostReversePaymentHeaders headers;
    public PostReversePaymentRequest withHeaders(PostReversePaymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostReversePaymentRequest request;
    public PostReversePaymentRequest withRequest(openapisdk.models.shared.PostReversePaymentRequest request) {
        this.request = request;
        return this;
    }
}