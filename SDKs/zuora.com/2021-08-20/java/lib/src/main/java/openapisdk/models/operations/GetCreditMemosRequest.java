package openapisdk.models.operations;



public class GetCreditMemosRequest {
    public GetCreditMemosQueryParams queryParams;
    public GetCreditMemosRequest withQueryParams(GetCreditMemosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCreditMemosHeaders headers;
    public GetCreditMemosRequest withHeaders(GetCreditMemosHeaders headers) {
        this.headers = headers;
        return this;
    }
}