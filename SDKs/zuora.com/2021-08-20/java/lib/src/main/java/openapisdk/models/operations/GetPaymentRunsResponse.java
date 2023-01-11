package openapisdk.models.operations;



public class GetPaymentRunsResponse {
    public String contentType;
    public GetPaymentRunsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPaymentRunCollectionType getPaymentRunCollectionType;
    public GetPaymentRunsResponse withGetPaymentRunCollectionType(openapisdk.models.shared.GetPaymentRunCollectionType getPaymentRunCollectionType) {
        this.getPaymentRunCollectionType = getPaymentRunCollectionType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPaymentRunsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetPaymentRunsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}