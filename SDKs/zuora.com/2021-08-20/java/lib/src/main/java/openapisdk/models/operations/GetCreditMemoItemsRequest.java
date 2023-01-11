package openapisdk.models.operations;



public class GetCreditMemoItemsRequest {
    public GetCreditMemoItemsPathParams pathParams;
    public GetCreditMemoItemsRequest withPathParams(GetCreditMemoItemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCreditMemoItemsQueryParams queryParams;
    public GetCreditMemoItemsRequest withQueryParams(GetCreditMemoItemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCreditMemoItemsHeaders headers;
    public GetCreditMemoItemsRequest withHeaders(GetCreditMemoItemsHeaders headers) {
        this.headers = headers;
        return this;
    }
}