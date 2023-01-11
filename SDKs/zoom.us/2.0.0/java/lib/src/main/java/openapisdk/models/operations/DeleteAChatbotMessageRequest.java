package openapisdk.models.operations;



public class DeleteAChatbotMessageRequest {
    public DeleteAChatbotMessagePathParams pathParams;
    public DeleteAChatbotMessageRequest withPathParams(DeleteAChatbotMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteAChatbotMessageRequests request;
    public DeleteAChatbotMessageRequest withRequest(DeleteAChatbotMessageRequests request) {
        this.request = request;
        return this;
    }
    public DeleteAChatbotMessageSecurity security;
    public DeleteAChatbotMessageRequest withSecurity(DeleteAChatbotMessageSecurity security) {
        this.security = security;
        return this;
    }
}