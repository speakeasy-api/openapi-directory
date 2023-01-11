package openapisdk.models.operations;



public class GetCallLogsRequest {
    public GetCallLogsPathParams pathParams;
    public GetCallLogsRequest withPathParams(GetCallLogsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCallLogsQueryParams queryParams;
    public GetCallLogsRequest withQueryParams(GetCallLogsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCallLogsSecurity security;
    public GetCallLogsRequest withSecurity(GetCallLogsSecurity security) {
        this.security = security;
        return this;
    }
}