package openapisdk.models.operations;



public class GetIpSetRequest {
    public GetIpSetPathParams pathParams;
    public GetIpSetRequest withPathParams(GetIpSetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetIpSetQueryParams queryParams;
    public GetIpSetRequest withQueryParams(GetIpSetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetIpSetSecurity security;
    public GetIpSetRequest withSecurity(GetIpSetSecurity security) {
        this.security = security;
        return this;
    }
}