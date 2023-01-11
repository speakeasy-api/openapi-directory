package openapisdk.models.operations;



public class GetBillingPreviewRunResponse {
    public String contentType;
    public GetBillingPreviewRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetBillingPreviewRunResponse getBillingPreviewRunResponse;
    public GetBillingPreviewRunResponse withGetBillingPreviewRunResponse(openapisdk.models.shared.GetBillingPreviewRunResponse getBillingPreviewRunResponse) {
        this.getBillingPreviewRunResponse = getBillingPreviewRunResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetBillingPreviewRunResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetBillingPreviewRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}