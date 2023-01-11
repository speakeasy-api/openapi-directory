package openapisdk.models.operations;



public class PostPaymentMethodsDecryptionResponse {
    public String contentType;
    public PostPaymentMethodsDecryptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostPaymentMethodsDecryptionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostPaymentMethodResponseDecryption postPaymentMethodResponseDecryption;
    public PostPaymentMethodsDecryptionResponse withPostPaymentMethodResponseDecryption(openapisdk.models.shared.PostPaymentMethodResponseDecryption postPaymentMethodResponseDecryption) {
        this.postPaymentMethodResponseDecryption = postPaymentMethodResponseDecryption;
        return this;
    }
    public Long statusCode;
    public PostPaymentMethodsDecryptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}