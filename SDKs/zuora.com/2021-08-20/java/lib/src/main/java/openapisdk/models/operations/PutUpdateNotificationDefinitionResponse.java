package openapisdk.models.operations;



public class PutUpdateNotificationDefinitionResponse {
    public String contentType;
    public PutUpdateNotificationDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PutUpdateNotificationDefinitionResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.GetPublicNotificationDefinitionResponse getPublicNotificationDefinitionResponse;
    public PutUpdateNotificationDefinitionResponse withGetPublicNotificationDefinitionResponse(openapisdk.models.shared.GetPublicNotificationDefinitionResponse getPublicNotificationDefinitionResponse) {
        this.getPublicNotificationDefinitionResponse = getPublicNotificationDefinitionResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutUpdateNotificationDefinitionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutUpdateNotificationDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}