package openapisdk.models.operations;



public class GetAllOrdersRequest {
    public GetAllOrdersQueryParams queryParams;
    public GetAllOrdersRequest withQueryParams(GetAllOrdersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAllOrdersHeaders headers;
    public GetAllOrdersRequest withHeaders(GetAllOrdersHeaders headers) {
        this.headers = headers;
        return this;
    }
}