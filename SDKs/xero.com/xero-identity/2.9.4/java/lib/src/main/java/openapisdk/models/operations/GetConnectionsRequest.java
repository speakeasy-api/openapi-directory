package openapisdk.models.operations;



public class GetConnectionsRequest {
    public GetConnectionsQueryParams queryParams;
    public GetConnectionsRequest withQueryParams(GetConnectionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetConnectionsSecurity security;
    public GetConnectionsRequest withSecurity(GetConnectionsSecurity security) {
        this.security = security;
        return this;
    }
}