package openapisdk.models.operations;



public class GetRetrieveAllPaymentsResponse {
    public String contentType;
    public GetRetrieveAllPaymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRetrieveAllPaymentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PaymentCollectionResponseType paymentCollectionResponseType;
    public GetRetrieveAllPaymentsResponse withPaymentCollectionResponseType(openapisdk.models.shared.PaymentCollectionResponseType paymentCollectionResponseType) {
        this.paymentCollectionResponseType = paymentCollectionResponseType;
        return this;
    }
    public Long statusCode;
    public GetRetrieveAllPaymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}