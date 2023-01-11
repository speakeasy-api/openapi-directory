package openapisdk.models.operations;



public class PostPaymentMethodsCreditCardResponse {
    public String contentType;
    public PostPaymentMethodsCreditCardResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostPaymentMethodsCreditCardResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostPaymentMethodResponseType postPaymentMethodResponseType;
    public PostPaymentMethodsCreditCardResponse withPostPaymentMethodResponseType(openapisdk.models.shared.PostPaymentMethodResponseType postPaymentMethodResponseType) {
        this.postPaymentMethodResponseType = postPaymentMethodResponseType;
        return this;
    }
    public Long statusCode;
    public PostPaymentMethodsCreditCardResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}