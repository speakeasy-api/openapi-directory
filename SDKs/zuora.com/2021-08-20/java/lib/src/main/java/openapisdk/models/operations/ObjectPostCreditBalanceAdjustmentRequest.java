package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostCreditBalanceAdjustmentRequest {
    public ObjectPostCreditBalanceAdjustmentQueryParams queryParams;
    public ObjectPostCreditBalanceAdjustmentRequest withQueryParams(ObjectPostCreditBalanceAdjustmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPostCreditBalanceAdjustmentHeaders headers;
    public ObjectPostCreditBalanceAdjustmentRequest withHeaders(ObjectPostCreditBalanceAdjustmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPostCreditBalanceAdjustmentRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}