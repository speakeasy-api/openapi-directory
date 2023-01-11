package openapisdk.models.operations;



public class PutPaymentMethodsCreditCardResponse {
    public String contentType;
    public PutPaymentMethodsCreditCardResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutPaymentMethodsCreditCardResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PutPaymentMethodResponseType putPaymentMethodResponseType;
    public PutPaymentMethodsCreditCardResponse withPutPaymentMethodResponseType(openapisdk.models.shared.PutPaymentMethodResponseType putPaymentMethodResponseType) {
        this.putPaymentMethodResponseType = putPaymentMethodResponseType;
        return this;
    }
    public Long statusCode;
    public PutPaymentMethodsCreditCardResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}