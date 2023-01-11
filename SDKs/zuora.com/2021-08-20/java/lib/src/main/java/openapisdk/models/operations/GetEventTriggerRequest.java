package openapisdk.models.operations;



public class GetEventTriggerRequest {
    public GetEventTriggerPathParams pathParams;
    public GetEventTriggerRequest withPathParams(GetEventTriggerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEventTriggerHeaders headers;
    public GetEventTriggerRequest withHeaders(GetEventTriggerHeaders headers) {
        this.headers = headers;
        return this;
    }
}