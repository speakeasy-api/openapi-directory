package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutCreditBalanceAdjustmentRequest {
    public ObjectPutCreditBalanceAdjustmentPathParams pathParams;
    public ObjectPutCreditBalanceAdjustmentRequest withPathParams(ObjectPutCreditBalanceAdjustmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectPutCreditBalanceAdjustmentQueryParams queryParams;
    public ObjectPutCreditBalanceAdjustmentRequest withQueryParams(ObjectPutCreditBalanceAdjustmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPutCreditBalanceAdjustmentHeaders headers;
    public ObjectPutCreditBalanceAdjustmentRequest withHeaders(ObjectPutCreditBalanceAdjustmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPutCreditBalanceAdjustmentRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}