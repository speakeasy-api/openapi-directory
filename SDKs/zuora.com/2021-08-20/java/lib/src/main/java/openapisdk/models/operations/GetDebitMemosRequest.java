package openapisdk.models.operations;



public class GetDebitMemosRequest {
    public GetDebitMemosQueryParams queryParams;
    public GetDebitMemosRequest withQueryParams(GetDebitMemosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDebitMemosHeaders headers;
    public GetDebitMemosRequest withHeaders(GetDebitMemosHeaders headers) {
        this.headers = headers;
        return this;
    }
}