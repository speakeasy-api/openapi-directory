package openapisdk.models.operations;



public class GetRefundPartResponse {
    public String contentType;
    public GetRefundPartResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRefundPartResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.RefundPartResponseType refundPartResponseType;
    public GetRefundPartResponse withRefundPartResponseType(openapisdk.models.shared.RefundPartResponseType refundPartResponseType) {
        this.refundPartResponseType = refundPartResponseType;
        return this;
    }
    public Long statusCode;
    public GetRefundPartResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}