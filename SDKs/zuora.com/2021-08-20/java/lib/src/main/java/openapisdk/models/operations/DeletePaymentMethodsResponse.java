package openapisdk.models.operations;



public class DeletePaymentMethodsResponse {
    public openapisdk.models.shared.CommonResponseType commonResponseType;
    public DeletePaymentMethodsResponse withCommonResponseType(openapisdk.models.shared.CommonResponseType commonResponseType) {
        this.commonResponseType = commonResponseType;
        return this;
    }
    public String contentType;
    public DeletePaymentMethodsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeletePaymentMethodsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeletePaymentMethodsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}