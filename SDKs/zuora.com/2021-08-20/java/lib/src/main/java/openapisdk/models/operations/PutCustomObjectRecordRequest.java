package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCustomObjectRecordRequest {
    public PutCustomObjectRecordPathParams pathParams;
    public PutCustomObjectRecordRequest withPathParams(PutCustomObjectRecordPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutCustomObjectRecordHeaders headers;
    public PutCustomObjectRecordRequest withHeaders(PutCustomObjectRecordHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutCustomObjectRecordRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}