package openapisdk.models.operations;



public class PostCreateNotificationDefinitionResponse {
    public String contentType;
    public PostCreateNotificationDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostCreateNotificationDefinitionResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.GetPublicNotificationDefinitionResponse getPublicNotificationDefinitionResponse;
    public PostCreateNotificationDefinitionResponse withGetPublicNotificationDefinitionResponse(openapisdk.models.shared.GetPublicNotificationDefinitionResponse getPublicNotificationDefinitionResponse) {
        this.getPublicNotificationDefinitionResponse = getPublicNotificationDefinitionResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostCreateNotificationDefinitionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostCreateNotificationDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}