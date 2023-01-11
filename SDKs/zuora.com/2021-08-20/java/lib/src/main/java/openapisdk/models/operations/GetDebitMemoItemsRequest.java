package openapisdk.models.operations;



public class GetDebitMemoItemsRequest {
    public GetDebitMemoItemsPathParams pathParams;
    public GetDebitMemoItemsRequest withPathParams(GetDebitMemoItemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDebitMemoItemsQueryParams queryParams;
    public GetDebitMemoItemsRequest withQueryParams(GetDebitMemoItemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDebitMemoItemsHeaders headers;
    public GetDebitMemoItemsRequest withHeaders(GetDebitMemoItemsHeaders headers) {
        this.headers = headers;
        return this;
    }
}