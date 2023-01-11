package openapisdk.models.operations;



public class GetRefundPartsResponse {
    public String contentType;
    public GetRefundPartsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRefundPartCollectionType getRefundPartCollectionType;
    public GetRefundPartsResponse withGetRefundPartCollectionType(openapisdk.models.shared.GetRefundPartCollectionType getRefundPartCollectionType) {
        this.getRefundPartCollectionType = getRefundPartCollectionType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRefundPartsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRefundPartsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}