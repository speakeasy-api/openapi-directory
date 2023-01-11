package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSettlePaymentRequest {
    public PostSettlePaymentPathParams pathParams;
    public PostSettlePaymentRequest withPathParams(PostSettlePaymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostSettlePaymentHeaders headers;
    public PostSettlePaymentRequest withHeaders(PostSettlePaymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostSettlePaymentRequest request;
    public PostSettlePaymentRequest withRequest(openapisdk.models.shared.PostSettlePaymentRequest request) {
        this.request = request;
        return this;
    }
}