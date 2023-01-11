package openapisdk.models.operations;



public class SendaChatMessageRequest {
    public SendaChatMessagePathParams pathParams;
    public SendaChatMessageRequest withPathParams(SendaChatMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SendaChatMessageRequests request;
    public SendaChatMessageRequest withRequest(SendaChatMessageRequests request) {
        this.request = request;
        return this;
    }
    public SendaChatMessageSecurity security;
    public SendaChatMessageRequest withSecurity(SendaChatMessageSecurity security) {
        this.security = security;
        return this;
    }
}