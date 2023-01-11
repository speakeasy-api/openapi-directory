package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRejectPaymentRequest {
    public PostRejectPaymentPathParams pathParams;
    public PostRejectPaymentRequest withPathParams(PostRejectPaymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostRejectPaymentHeaders headers;
    public PostRejectPaymentRequest withHeaders(PostRejectPaymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostRejectPaymentRequest request;
    public PostRejectPaymentRequest withRequest(openapisdk.models.shared.PostRejectPaymentRequest request) {
        this.request = request;
        return this;
    }
}