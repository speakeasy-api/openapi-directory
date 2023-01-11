package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRsBasicInfoRequest {
    public PutRsBasicInfoPathParams pathParams;
    public PutRsBasicInfoRequest withPathParams(PutRsBasicInfoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutRsBasicInfoHeaders headers;
    public PutRsBasicInfoRequest withHeaders(PutRsBasicInfoHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutRsBasicInfoRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}