package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPaymentRunRequest {
    public PutPaymentRunPathParams pathParams;
    public PutPaymentRunRequest withPathParams(PutPaymentRunPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutPaymentRunHeaders headers;
    public PutPaymentRunRequest withHeaders(PutPaymentRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutPaymentRunRequest request;
    public PutPaymentRunRequest withRequest(openapisdk.models.shared.PutPaymentRunRequest request) {
        this.request = request;
        return this;
    }
}