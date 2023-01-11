package openapisdk.models.operations;



public class PutVerifyPaymentMethodsResponse {
    public String contentType;
    public PutVerifyPaymentMethodsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutVerifyPaymentMethodsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PutVerifyPaymentMethodResponseType putVerifyPaymentMethodResponseType;
    public PutVerifyPaymentMethodsResponse withPutVerifyPaymentMethodResponseType(openapisdk.models.shared.PutVerifyPaymentMethodResponseType putVerifyPaymentMethodResponseType) {
        this.putVerifyPaymentMethodResponseType = putVerifyPaymentMethodResponseType;
        return this;
    }
    public Long statusCode;
    public PutVerifyPaymentMethodsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}