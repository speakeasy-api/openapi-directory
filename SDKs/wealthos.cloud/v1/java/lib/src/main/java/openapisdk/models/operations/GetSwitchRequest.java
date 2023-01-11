package openapisdk.models.operations;



public class GetSwitchRequest {
    public GetSwitchPathParams pathParams;
    public GetSwitchRequest withPathParams(GetSwitchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSwitchQueryParams queryParams;
    public GetSwitchRequest withQueryParams(GetSwitchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSwitchHeaders headers;
    public GetSwitchRequest withHeaders(GetSwitchHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetSwitchSecurity security;
    public GetSwitchRequest withSecurity(GetSwitchSecurity security) {
        this.security = security;
        return this;
    }
}