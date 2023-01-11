package openapisdk.models.operations;



public class ViewWebhookResponse {
    public String contentType;
    public ViewWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public ViewWebhookResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public ViewWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Webhook webhook;
    public ViewWebhookResponse withWebhook(openapisdk.models.shared.Webhook webhook) {
        this.webhook = webhook;
        return this;
    }
}