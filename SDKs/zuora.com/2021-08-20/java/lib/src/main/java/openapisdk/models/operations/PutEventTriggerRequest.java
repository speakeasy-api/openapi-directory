package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEventTriggerRequest {
    public PutEventTriggerPathParams pathParams;
    public PutEventTriggerRequest withPathParams(PutEventTriggerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutEventTriggerHeaders headers;
    public PutEventTriggerRequest withHeaders(PutEventTriggerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutEventTriggerRequest request;
    public PutEventTriggerRequest withRequest(openapisdk.models.shared.PutEventTriggerRequest request) {
        this.request = request;
        return this;
    }
}