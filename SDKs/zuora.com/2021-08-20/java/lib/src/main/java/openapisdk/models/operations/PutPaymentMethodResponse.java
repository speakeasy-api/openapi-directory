package openapisdk.models.operations;



public class PutPaymentMethodResponse {
    public String contentType;
    public PutPaymentMethodResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutPaymentMethodResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PutPaymentMethodResponse putPaymentMethodResponse;
    public PutPaymentMethodResponse withPutPaymentMethodResponse(openapisdk.models.shared.PutPaymentMethodResponse putPaymentMethodResponse) {
        this.putPaymentMethodResponse = putPaymentMethodResponse;
        return this;
    }
    public Long statusCode;
    public PutPaymentMethodResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}