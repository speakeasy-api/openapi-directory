package openapisdk.models.operations;



public class PutUpdateEmailTemplateResponse {
    public String contentType;
    public PutUpdateEmailTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PutUpdateEmailTemplateResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.GetPublicEmailTemplateResponse getPublicEmailTemplateResponse;
    public PutUpdateEmailTemplateResponse withGetPublicEmailTemplateResponse(openapisdk.models.shared.GetPublicEmailTemplateResponse getPublicEmailTemplateResponse) {
        this.getPublicEmailTemplateResponse = getPublicEmailTemplateResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutUpdateEmailTemplateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutUpdateEmailTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}