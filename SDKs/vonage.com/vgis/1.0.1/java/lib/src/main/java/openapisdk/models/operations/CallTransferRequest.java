package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CallTransferRequest {
    public CallTransferPathParams pathParams;
    public CallTransferRequest withPathParams(CallTransferPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CallTransfer request;
    public CallTransferRequest withRequest(openapisdk.models.shared.CallTransfer request) {
        this.request = request;
        return this;
    }
}