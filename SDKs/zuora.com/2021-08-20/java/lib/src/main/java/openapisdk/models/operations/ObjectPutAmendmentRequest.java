package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutAmendmentRequest {
    public ObjectPutAmendmentPathParams pathParams;
    public ObjectPutAmendmentRequest withPathParams(ObjectPutAmendmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectPutAmendmentQueryParams queryParams;
    public ObjectPutAmendmentRequest withQueryParams(ObjectPutAmendmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPutAmendmentHeaders headers;
    public ObjectPutAmendmentRequest withHeaders(ObjectPutAmendmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPutAmendmentRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}