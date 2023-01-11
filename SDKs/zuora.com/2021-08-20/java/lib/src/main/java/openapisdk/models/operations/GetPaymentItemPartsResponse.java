package openapisdk.models.operations;



public class GetPaymentItemPartsResponse {
    public String contentType;
    public GetPaymentItemPartsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPaymentItemPartCollectionType getPaymentItemPartCollectionType;
    public GetPaymentItemPartsResponse withGetPaymentItemPartCollectionType(openapisdk.models.shared.GetPaymentItemPartCollectionType getPaymentItemPartCollectionType) {
        this.getPaymentItemPartCollectionType = getPaymentItemPartCollectionType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPaymentItemPartsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetPaymentItemPartsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}