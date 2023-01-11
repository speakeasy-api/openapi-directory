package openapisdk.models.operations;



public class PostPaymentRunResponse {
    public String contentType;
    public PostPaymentRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPaymentRunType getPaymentRunType;
    public PostPaymentRunResponse withGetPaymentRunType(openapisdk.models.shared.GetPaymentRunType getPaymentRunType) {
        this.getPaymentRunType = getPaymentRunType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostPaymentRunResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostPaymentRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}