package openapisdk.models.operations;



public class GetTransactionPaymentResponse {
    public String contentType;
    public GetTransactionPaymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPaymentsType getPaymentsType;
    public GetTransactionPaymentResponse withGetPaymentsType(openapisdk.models.shared.GetPaymentsType getPaymentsType) {
        this.getPaymentsType = getPaymentsType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTransactionPaymentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTransactionPaymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}