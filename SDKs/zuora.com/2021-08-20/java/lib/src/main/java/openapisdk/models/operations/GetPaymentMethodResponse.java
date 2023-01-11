package openapisdk.models.operations;



public class GetPaymentMethodResponse {
    public String contentType;
    public GetPaymentMethodResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getPaymentMethodResponse;
    public GetPaymentMethodResponse withGetPaymentMethodResponse(java.util.Map<String, Object> getPaymentMethodResponse) {
        this.getPaymentMethodResponse = getPaymentMethodResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPaymentMethodResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetPaymentMethodResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}