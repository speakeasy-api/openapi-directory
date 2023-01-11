package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutOrderTriggerDatesRequest {
    public PutOrderTriggerDatesPathParams pathParams;
    public PutOrderTriggerDatesRequest withPathParams(PutOrderTriggerDatesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutOrderTriggerDatesHeaders headers;
    public PutOrderTriggerDatesRequest withHeaders(PutOrderTriggerDatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutOrderActionTriggerDatesRequestType request;
    public PutOrderTriggerDatesRequest withRequest(openapisdk.models.shared.PutOrderActionTriggerDatesRequestType request) {
        this.request = request;
        return this;
    }
}