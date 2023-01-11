package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRSforSubscChargeRequest {
    public PostRSforSubscChargePathParams pathParams;
    public PostRSforSubscChargeRequest withPathParams(PostRSforSubscChargePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostRSforSubscChargeHeaders headers;
    public PostRSforSubscChargeRequest withHeaders(PostRSforSubscChargeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostRSforSubscChargeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}