package openapisdk.models.operations;



public class GetRefundResponse {
    public String contentType;
    public GetRefundResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getRefundType;
    public GetRefundResponse withGetRefundType(java.util.Map<String, Object> getRefundType) {
        this.getRefundType = getRefundType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRefundResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRefundResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}