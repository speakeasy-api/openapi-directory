package openapisdk.models.operations;



public class GetEntityConnectionsRequest {
    public GetEntityConnectionsQueryParams queryParams;
    public GetEntityConnectionsRequest withQueryParams(GetEntityConnectionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEntityConnectionsHeaders headers;
    public GetEntityConnectionsRequest withHeaders(GetEntityConnectionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}