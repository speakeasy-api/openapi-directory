package openapisdk.models.operations;



public class GetBillingDocumentsRequest {
    public GetBillingDocumentsQueryParams queryParams;
    public GetBillingDocumentsRequest withQueryParams(GetBillingDocumentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetBillingDocumentsHeaders headers;
    public GetBillingDocumentsRequest withHeaders(GetBillingDocumentsHeaders headers) {
        this.headers = headers;
        return this;
    }
}