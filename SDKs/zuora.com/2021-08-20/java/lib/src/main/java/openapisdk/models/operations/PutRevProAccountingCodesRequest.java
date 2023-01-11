package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRevProAccountingCodesRequest {
    public PutRevProAccountingCodesHeaders headers;
    public PutRevProAccountingCodesRequest withHeaders(PutRevProAccountingCodesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RevproAccountingCodes request;
    public PutRevProAccountingCodesRequest withRequest(openapisdk.models.shared.RevproAccountingCodes request) {
        this.request = request;
        return this;
    }
}