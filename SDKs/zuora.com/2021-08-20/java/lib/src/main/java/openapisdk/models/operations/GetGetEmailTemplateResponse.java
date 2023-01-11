package openapisdk.models.operations;



public class GetGetEmailTemplateResponse {
    public String contentType;
    public GetGetEmailTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetGetEmailTemplateResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.GetPublicEmailTemplateResponse getPublicEmailTemplateResponse;
    public GetGetEmailTemplateResponse withGetPublicEmailTemplateResponse(openapisdk.models.shared.GetPublicEmailTemplateResponse getPublicEmailTemplateResponse) {
        this.getPublicEmailTemplateResponse = getPublicEmailTemplateResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetGetEmailTemplateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetGetEmailTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}