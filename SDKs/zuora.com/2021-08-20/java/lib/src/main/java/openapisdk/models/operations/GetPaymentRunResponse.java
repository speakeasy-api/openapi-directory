package openapisdk.models.operations;



public class GetPaymentRunResponse {
    public String contentType;
    public GetPaymentRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPaymentRunType getPaymentRunType;
    public GetPaymentRunResponse withGetPaymentRunType(openapisdk.models.shared.GetPaymentRunType getPaymentRunType) {
        this.getPaymentRunType = getPaymentRunType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPaymentRunResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetPaymentRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}