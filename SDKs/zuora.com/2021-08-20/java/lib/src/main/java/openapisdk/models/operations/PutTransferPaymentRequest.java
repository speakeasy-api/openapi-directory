package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTransferPaymentRequest {
    public PutTransferPaymentPathParams pathParams;
    public PutTransferPaymentRequest withPathParams(PutTransferPaymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutTransferPaymentHeaders headers;
    public PutTransferPaymentRequest withHeaders(PutTransferPaymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TransferPaymentType request;
    public PutTransferPaymentRequest withRequest(openapisdk.models.shared.TransferPaymentType request) {
        this.request = request;
        return this;
    }
}