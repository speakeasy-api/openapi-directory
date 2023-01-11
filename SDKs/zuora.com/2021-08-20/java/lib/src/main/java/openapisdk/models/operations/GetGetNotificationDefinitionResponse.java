package openapisdk.models.operations;



public class GetGetNotificationDefinitionResponse {
    public String contentType;
    public GetGetNotificationDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetGetNotificationDefinitionResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.GetPublicNotificationDefinitionResponse getPublicNotificationDefinitionResponse;
    public GetGetNotificationDefinitionResponse withGetPublicNotificationDefinitionResponse(openapisdk.models.shared.GetPublicNotificationDefinitionResponse getPublicNotificationDefinitionResponse) {
        this.getPublicNotificationDefinitionResponse = getPublicNotificationDefinitionResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetGetNotificationDefinitionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetGetNotificationDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}