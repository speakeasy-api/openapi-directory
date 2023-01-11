package openapisdk.models.operations;



public class GetRefundItemPartResponse {
    public String contentType;
    public GetRefundItemPartResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRefundItemPartType getRefundItemPartType;
    public GetRefundItemPartResponse withGetRefundItemPartType(openapisdk.models.shared.GetRefundItemPartType getRefundItemPartType) {
        this.getRefundItemPartType = getRefundItemPartType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRefundItemPartResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRefundItemPartResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}