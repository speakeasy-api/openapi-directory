package openapisdk.models.operations;



public class GetQueryEmailTemplatesRequest {
    public GetQueryEmailTemplatesQueryParams queryParams;
    public GetQueryEmailTemplatesRequest withQueryParams(GetQueryEmailTemplatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetQueryEmailTemplatesHeaders headers;
    public GetQueryEmailTemplatesRequest withHeaders(GetQueryEmailTemplatesHeaders headers) {
        this.headers = headers;
        return this;
    }
}