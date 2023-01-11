package openapisdk.models.operations;



public class PutPaymentRunResponse {
    public String contentType;
    public PutPaymentRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPaymentRunType getPaymentRunType;
    public PutPaymentRunResponse withGetPaymentRunType(openapisdk.models.shared.GetPaymentRunType getPaymentRunType) {
        this.getPaymentRunType = getPaymentRunType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutPaymentRunResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutPaymentRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}