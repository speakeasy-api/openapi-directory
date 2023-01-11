package openapisdk.models.operations;



public class GetFreeBetsRequest {
    public GetFreeBetsQueryParams queryParams;
    public GetFreeBetsRequest withQueryParams(GetFreeBetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFreeBetsHeaders headers;
    public GetFreeBetsRequest withHeaders(GetFreeBetsHeaders headers) {
        this.headers = headers;
        return this;
    }
}