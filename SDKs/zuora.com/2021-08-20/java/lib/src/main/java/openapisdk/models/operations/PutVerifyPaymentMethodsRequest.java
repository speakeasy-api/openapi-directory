package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutVerifyPaymentMethodsRequest {
    public PutVerifyPaymentMethodsPathParams pathParams;
    public PutVerifyPaymentMethodsRequest withPathParams(PutVerifyPaymentMethodsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutVerifyPaymentMethodsHeaders headers;
    public PutVerifyPaymentMethodsRequest withHeaders(PutVerifyPaymentMethodsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutVerifyPaymentMethodType request;
    public PutVerifyPaymentMethodsRequest withRequest(openapisdk.models.shared.PutVerifyPaymentMethodType request) {
        this.request = request;
        return this;
    }
}