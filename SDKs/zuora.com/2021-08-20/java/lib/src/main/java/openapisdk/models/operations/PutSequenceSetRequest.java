package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSequenceSetRequest {
    public PutSequenceSetPathParams pathParams;
    public PutSequenceSetRequest withPathParams(PutSequenceSetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutSequenceSetHeaders headers;
    public PutSequenceSetRequest withHeaders(PutSequenceSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutSequenceSetRequest request;
    public PutSequenceSetRequest withRequest(openapisdk.models.shared.PutSequenceSetRequest request) {
        this.request = request;
        return this;
    }
}