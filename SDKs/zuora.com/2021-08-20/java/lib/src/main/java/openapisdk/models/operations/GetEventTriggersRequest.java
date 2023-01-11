package openapisdk.models.operations;



public class GetEventTriggersRequest {
    public GetEventTriggersQueryParams queryParams;
    public GetEventTriggersRequest withQueryParams(GetEventTriggersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEventTriggersHeaders headers;
    public GetEventTriggersRequest withHeaders(GetEventTriggersHeaders headers) {
        this.headers = headers;
        return this;
    }
}