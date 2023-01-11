package openapisdk.models.operations;



public class GetPaymentMethodsCreditCardResponse {
    public String contentType;
    public GetPaymentMethodsCreditCardResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPaymentMethodsType getPaymentMethodsType;
    public GetPaymentMethodsCreditCardResponse withGetPaymentMethodsType(openapisdk.models.shared.GetPaymentMethodsType getPaymentMethodsType) {
        this.getPaymentMethodsType = getPaymentMethodsType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPaymentMethodsCreditCardResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetPaymentMethodsCreditCardResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}