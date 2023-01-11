package openapisdk.models.operations;



public class GetRefundItemPartsResponse {
    public String contentType;
    public GetRefundItemPartsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRefundItemPartCollectionType getRefundItemPartCollectionType;
    public GetRefundItemPartsResponse withGetRefundItemPartCollectionType(openapisdk.models.shared.GetRefundItemPartCollectionType getRefundItemPartCollectionType) {
        this.getRefundItemPartCollectionType = getRefundItemPartCollectionType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRefundItemPartsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRefundItemPartsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}