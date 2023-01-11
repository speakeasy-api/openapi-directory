package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobAddRequest {
    public JobAddQueryParams queryParams;
    public JobAddRequest withQueryParams(JobAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public JobAddHeaders headers;
    public JobAddRequest withHeaders(JobAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public JobAddRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}