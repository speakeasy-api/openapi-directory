package openapisdk.models.operations;



public class CallVmTransferResponse {
    public openapisdk.models.shared.Call call;
    public CallVmTransferResponse withCall(openapisdk.models.shared.Call call) {
        this.call = call;
        return this;
    }
    public String contentType;
    public CallVmTransferResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CallVmTransferResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CallVmTransferResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}