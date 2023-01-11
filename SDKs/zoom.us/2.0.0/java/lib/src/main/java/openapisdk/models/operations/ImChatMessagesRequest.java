package openapisdk.models.operations;



public class ImChatMessagesRequest {
    public ImChatMessagesPathParams pathParams;
    public ImChatMessagesRequest withPathParams(ImChatMessagesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ImChatMessagesQueryParams queryParams;
    public ImChatMessagesRequest withQueryParams(ImChatMessagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}