package openapisdk.models.operations;



public class DeleteChatMessageRequest {
    public DeleteChatMessagePathParams pathParams;
    public DeleteChatMessageRequest withPathParams(DeleteChatMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteChatMessageQueryParams queryParams;
    public DeleteChatMessageRequest withQueryParams(DeleteChatMessageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteChatMessageSecurity security;
    public DeleteChatMessageRequest withSecurity(DeleteChatMessageSecurity security) {
        this.security = security;
        return this;
    }
}