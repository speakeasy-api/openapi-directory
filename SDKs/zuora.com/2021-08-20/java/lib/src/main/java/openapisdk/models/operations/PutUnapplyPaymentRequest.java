package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUnapplyPaymentRequest {
    public PutUnapplyPaymentPathParams pathParams;
    public PutUnapplyPaymentRequest withPathParams(PutUnapplyPaymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutUnapplyPaymentHeaders headers;
    public PutUnapplyPaymentRequest withHeaders(PutUnapplyPaymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UnapplyPaymentType request;
    public PutUnapplyPaymentRequest withRequest(openapisdk.models.shared.UnapplyPaymentType request) {
        this.request = request;
        return this;
    }
}