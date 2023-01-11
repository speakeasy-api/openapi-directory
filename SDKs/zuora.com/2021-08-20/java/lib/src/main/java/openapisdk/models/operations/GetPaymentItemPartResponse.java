package openapisdk.models.operations;



public class GetPaymentItemPartResponse {
    public String contentType;
    public GetPaymentItemPartResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPaymentItemPartType getPaymentItemPartType;
    public GetPaymentItemPartResponse withGetPaymentItemPartType(openapisdk.models.shared.GetPaymentItemPartType getPaymentItemPartType) {
        this.getPaymentItemPartType = getPaymentItemPartType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPaymentItemPartResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetPaymentItemPartResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}