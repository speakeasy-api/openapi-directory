package openapisdk.models.operations;



public class SendchatbotRequest {
    public SendchatbotRequests request;
    public SendchatbotRequest withRequest(SendchatbotRequests request) {
        this.request = request;
        return this;
    }
    public SendchatbotSecurity security;
    public SendchatbotRequest withSecurity(SendchatbotSecurity security) {
        this.security = security;
        return this;
    }
}