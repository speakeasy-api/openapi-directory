package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRevenueAcrossApRequest {
    public PutRevenueAcrossApPathParams pathParams;
    public PutRevenueAcrossApRequest withPathParams(PutRevenueAcrossApPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutRevenueAcrossApHeaders headers;
    public PutRevenueAcrossApRequest withHeaders(PutRevenueAcrossApHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutRevenueAcrossApRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}