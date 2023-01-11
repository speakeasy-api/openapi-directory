package openapisdk.models.operations;



public class GetRefundsResponse {
    public String contentType;
    public GetRefundsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRefundCollectionType getRefundCollectionType;
    public GetRefundsResponse withGetRefundCollectionType(openapisdk.models.shared.GetRefundCollectionType getRefundCollectionType) {
        this.getRefundCollectionType = getRefundCollectionType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRefundsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRefundsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}