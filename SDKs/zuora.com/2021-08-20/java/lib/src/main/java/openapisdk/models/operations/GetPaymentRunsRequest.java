package openapisdk.models.operations;



public class GetPaymentRunsRequest {
    public GetPaymentRunsQueryParams queryParams;
    public GetPaymentRunsRequest withQueryParams(GetPaymentRunsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPaymentRunsHeaders headers;
    public GetPaymentRunsRequest withHeaders(GetPaymentRunsHeaders headers) {
        this.headers = headers;
        return this;
    }
}