package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutApplyPaymentRequest {
    public PutApplyPaymentPathParams pathParams;
    public PutApplyPaymentRequest withPathParams(PutApplyPaymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutApplyPaymentHeaders headers;
    public PutApplyPaymentRequest withHeaders(PutApplyPaymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApplyPaymentType request;
    public PutApplyPaymentRequest withRequest(openapisdk.models.shared.ApplyPaymentType request) {
        this.request = request;
        return this;
    }
}