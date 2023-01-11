package openapisdk.models.operations;



public class GetChatMessagesRequest {
    public GetChatMessagesPathParams pathParams;
    public GetChatMessagesRequest withPathParams(GetChatMessagesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetChatMessagesQueryParams queryParams;
    public GetChatMessagesRequest withQueryParams(GetChatMessagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetChatMessagesSecurity security;
    public GetChatMessagesRequest withSecurity(GetChatMessagesSecurity security) {
        this.security = security;
        return this;
    }
}