package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAccountingCodeRequest {
    public PostAccountingCodeHeaders headers;
    public PostAccountingCodeRequest withHeaders(PostAccountingCodeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostAccountingCodeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}