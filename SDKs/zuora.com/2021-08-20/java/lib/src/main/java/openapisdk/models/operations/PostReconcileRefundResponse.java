package openapisdk.models.operations;



public class PostReconcileRefundResponse {
    public String contentType;
    public PostReconcileRefundResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostReconcileRefundResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostReconcileRefundResponse postReconcileRefundResponse;
    public PostReconcileRefundResponse withPostReconcileRefundResponse(openapisdk.models.shared.PostReconcileRefundResponse postReconcileRefundResponse) {
        this.postReconcileRefundResponse = postReconcileRefundResponse;
        return this;
    }
    public Long statusCode;
    public PostReconcileRefundResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}