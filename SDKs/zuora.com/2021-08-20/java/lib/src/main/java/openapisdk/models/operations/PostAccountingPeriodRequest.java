package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAccountingPeriodRequest {
    public PostAccountingPeriodHeaders headers;
    public PostAccountingPeriodRequest withHeaders(PostAccountingPeriodHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostAccountingPeriodRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}