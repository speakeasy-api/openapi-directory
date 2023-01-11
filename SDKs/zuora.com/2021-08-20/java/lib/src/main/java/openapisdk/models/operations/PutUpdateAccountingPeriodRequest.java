package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUpdateAccountingPeriodRequest {
    public PutUpdateAccountingPeriodPathParams pathParams;
    public PutUpdateAccountingPeriodRequest withPathParams(PutUpdateAccountingPeriodPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutUpdateAccountingPeriodHeaders headers;
    public PutUpdateAccountingPeriodRequest withHeaders(PutUpdateAccountingPeriodHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutUpdateAccountingPeriodRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}