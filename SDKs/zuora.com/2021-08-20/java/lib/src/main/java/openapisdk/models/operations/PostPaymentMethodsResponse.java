package openapisdk.models.operations;



public class PostPaymentMethodsResponse {
    public String contentType;
    public PostPaymentMethodsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostPaymentMethodsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostPaymentMethodResponse postPaymentMethodResponse;
    public PostPaymentMethodsResponse withPostPaymentMethodResponse(openapisdk.models.shared.PostPaymentMethodResponse postPaymentMethodResponse) {
        this.postPaymentMethodResponse = postPaymentMethodResponse;
        return this;
    }
    public Long statusCode;
    public PostPaymentMethodsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}