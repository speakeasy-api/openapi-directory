package openapisdk.models.operations;



public class GetBetHistoryRequest {
    public GetBetHistoryQueryParams queryParams;
    public GetBetHistoryRequest withQueryParams(GetBetHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetBetHistoryHeaders headers;
    public GetBetHistoryRequest withHeaders(GetBetHistoryHeaders headers) {
        this.headers = headers;
        return this;
    }
}