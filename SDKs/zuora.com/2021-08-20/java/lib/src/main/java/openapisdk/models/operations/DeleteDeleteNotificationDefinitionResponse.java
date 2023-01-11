package openapisdk.models.operations;



public class DeleteDeleteNotificationDefinitionResponse {
    public String contentType;
    public DeleteDeleteNotificationDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public DeleteDeleteNotificationDefinitionResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteDeleteNotificationDefinitionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteDeleteNotificationDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}