package openapisdk.models.operations;



public class ImChatSessionsRequest {
    public ImChatSessionsQueryParams queryParams;
    public ImChatSessionsRequest withQueryParams(ImChatSessionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ImChatSessionsSecurity security;
    public ImChatSessionsRequest withSecurity(ImChatSessionsSecurity security) {
        this.security = security;
        return this;
    }
}