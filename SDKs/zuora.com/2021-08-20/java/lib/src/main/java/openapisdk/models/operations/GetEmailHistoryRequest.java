package openapisdk.models.operations;



public class GetEmailHistoryRequest {
    public GetEmailHistoryQueryParams queryParams;
    public GetEmailHistoryRequest withQueryParams(GetEmailHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEmailHistoryHeaders headers;
    public GetEmailHistoryRequest withHeaders(GetEmailHistoryHeaders headers) {
        this.headers = headers;
        return this;
    }
}