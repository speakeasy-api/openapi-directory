package openapisdk.models.operations;



public class DeleteRefundResponse {
    public openapisdk.models.shared.CommonResponseType commonResponseType;
    public DeleteRefundResponse withCommonResponseType(openapisdk.models.shared.CommonResponseType commonResponseType) {
        this.commonResponseType = commonResponseType;
        return this;
    }
    public String contentType;
    public DeleteRefundResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteRefundResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteRefundResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}