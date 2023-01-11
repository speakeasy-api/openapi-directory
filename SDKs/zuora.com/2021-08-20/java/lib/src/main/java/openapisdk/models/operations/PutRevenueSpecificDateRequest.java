package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRevenueSpecificDateRequest {
    public PutRevenueSpecificDatePathParams pathParams;
    public PutRevenueSpecificDateRequest withPathParams(PutRevenueSpecificDatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutRevenueSpecificDateHeaders headers;
    public PutRevenueSpecificDateRequest withHeaders(PutRevenueSpecificDateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutRevenueSpecificDateRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}