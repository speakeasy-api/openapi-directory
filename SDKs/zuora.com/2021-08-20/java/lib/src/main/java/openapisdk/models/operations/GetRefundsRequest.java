package openapisdk.models.operations;



public class GetRefundsRequest {
    public GetRefundsQueryParams queryParams;
    public GetRefundsRequest withQueryParams(GetRefundsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetRefundsHeaders headers;
    public GetRefundsRequest withHeaders(GetRefundsHeaders headers) {
        this.headers = headers;
        return this;
    }
}