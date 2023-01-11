package openapisdk.models.operations;



public class GetCalloutHistoryRequest {
    public GetCalloutHistoryQueryParams queryParams;
    public GetCalloutHistoryRequest withQueryParams(GetCalloutHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCalloutHistoryHeaders headers;
    public GetCalloutHistoryRequest withHeaders(GetCalloutHistoryHeaders headers) {
        this.headers = headers;
        return this;
    }
}