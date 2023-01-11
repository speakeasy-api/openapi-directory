package openapisdk.models.operations;



public class PutCancelRefundResponse {
    public String contentType;
    public PutCancelRefundResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getRefundType;
    public PutCancelRefundResponse withGetRefundType(java.util.Map<String, Object> getRefundType) {
        this.getRefundType = getRefundType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutCancelRefundResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutCancelRefundResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}