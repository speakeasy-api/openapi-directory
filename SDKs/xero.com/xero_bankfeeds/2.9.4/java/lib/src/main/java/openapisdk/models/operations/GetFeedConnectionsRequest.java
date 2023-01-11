package openapisdk.models.operations;



public class GetFeedConnectionsRequest {
    public GetFeedConnectionsQueryParams queryParams;
    public GetFeedConnectionsRequest withQueryParams(GetFeedConnectionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFeedConnectionsHeaders headers;
    public GetFeedConnectionsRequest withHeaders(GetFeedConnectionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetFeedConnectionsSecurity security;
    public GetFeedConnectionsRequest withSecurity(GetFeedConnectionsSecurity security) {
        this.security = security;
        return this;
    }
}