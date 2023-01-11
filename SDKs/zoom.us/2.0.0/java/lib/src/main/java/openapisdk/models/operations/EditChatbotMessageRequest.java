package openapisdk.models.operations;



public class EditChatbotMessageRequest {
    public EditChatbotMessagePathParams pathParams;
    public EditChatbotMessageRequest withPathParams(EditChatbotMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EditChatbotMessageRequests request;
    public EditChatbotMessageRequest withRequest(EditChatbotMessageRequests request) {
        this.request = request;
        return this;
    }
    public EditChatbotMessageSecurity security;
    public EditChatbotMessageRequest withSecurity(EditChatbotMessageSecurity security) {
        this.security = security;
        return this;
    }
}