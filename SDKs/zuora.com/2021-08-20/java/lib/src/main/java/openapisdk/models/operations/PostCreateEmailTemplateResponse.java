package openapisdk.models.operations;



public class PostCreateEmailTemplateResponse {
    public String contentType;
    public PostCreateEmailTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostCreateEmailTemplateResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.GetPublicEmailTemplateResponse getPublicEmailTemplateResponse;
    public PostCreateEmailTemplateResponse withGetPublicEmailTemplateResponse(openapisdk.models.shared.GetPublicEmailTemplateResponse getPublicEmailTemplateResponse) {
        this.getPublicEmailTemplateResponse = getPublicEmailTemplateResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostCreateEmailTemplateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostCreateEmailTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}