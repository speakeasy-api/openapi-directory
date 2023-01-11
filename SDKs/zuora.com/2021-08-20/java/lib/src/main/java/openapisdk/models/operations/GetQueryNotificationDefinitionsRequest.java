package openapisdk.models.operations;



public class GetQueryNotificationDefinitionsRequest {
    public GetQueryNotificationDefinitionsQueryParams queryParams;
    public GetQueryNotificationDefinitionsRequest withQueryParams(GetQueryNotificationDefinitionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetQueryNotificationDefinitionsHeaders headers;
    public GetQueryNotificationDefinitionsRequest withHeaders(GetQueryNotificationDefinitionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}