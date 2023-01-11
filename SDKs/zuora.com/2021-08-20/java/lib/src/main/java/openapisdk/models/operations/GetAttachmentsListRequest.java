package openapisdk.models.operations;



public class GetAttachmentsListRequest {
    public GetAttachmentsListPathParams pathParams;
    public GetAttachmentsListRequest withPathParams(GetAttachmentsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAttachmentsListQueryParams queryParams;
    public GetAttachmentsListRequest withQueryParams(GetAttachmentsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAttachmentsListHeaders headers;
    public GetAttachmentsListRequest withHeaders(GetAttachmentsListHeaders headers) {
        this.headers = headers;
        return this;
    }
}