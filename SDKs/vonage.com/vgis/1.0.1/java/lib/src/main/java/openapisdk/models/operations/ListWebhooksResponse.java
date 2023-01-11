package openapisdk.models.operations;



public class ListWebhooksResponse {
    public String contentType;
    public ListWebhooksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public ListWebhooksResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public ListWebhooksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Webhook[] webhooks;
    public ListWebhooksResponse withWebhooks(openapisdk.models.shared.Webhook[] webhooks) {
        this.webhooks = webhooks;
        return this;
    }
}