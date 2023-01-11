package openapisdk.models.operations;



public class GetPaymentPartResponse {
    public String contentType;
    public GetPaymentPartResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPaymentPartType getPaymentPartType;
    public GetPaymentPartResponse withGetPaymentPartType(openapisdk.models.shared.GetPaymentPartType getPaymentPartType) {
        this.getPaymentPartType = getPaymentPartType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPaymentPartResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetPaymentPartResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}