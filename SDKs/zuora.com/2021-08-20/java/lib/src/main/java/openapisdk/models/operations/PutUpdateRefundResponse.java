package openapisdk.models.operations;



public class PutUpdateRefundResponse {
    public String contentType;
    public PutUpdateRefundResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getRefundType;
    public PutUpdateRefundResponse withGetRefundType(java.util.Map<String, Object> getRefundType) {
        this.getRefundType = getRefundType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutUpdateRefundResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutUpdateRefundResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}