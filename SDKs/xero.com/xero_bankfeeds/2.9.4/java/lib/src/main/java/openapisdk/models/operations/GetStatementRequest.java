package openapisdk.models.operations;



public class GetStatementRequest {
    public GetStatementPathParams pathParams;
    public GetStatementRequest withPathParams(GetStatementPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetStatementQueryParams queryParams;
    public GetStatementRequest withQueryParams(GetStatementQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetStatementHeaders headers;
    public GetStatementRequest withHeaders(GetStatementHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetStatementSecurity security;
    public GetStatementRequest withSecurity(GetStatementSecurity security) {
        this.security = security;
        return this;
    }
}