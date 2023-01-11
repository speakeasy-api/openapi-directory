package openapisdk.models.operations;



public class DeletePaymentResponse {
    public openapisdk.models.shared.CommonResponseType commonResponseType;
    public DeletePaymentResponse withCommonResponseType(openapisdk.models.shared.CommonResponseType commonResponseType) {
        this.commonResponseType = commonResponseType;
        return this;
    }
    public String contentType;
    public DeletePaymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeletePaymentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeletePaymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}