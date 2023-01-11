package openapisdk.models.operations;



public class CallTransferResponse {
    public openapisdk.models.shared.Call call;
    public CallTransferResponse withCall(openapisdk.models.shared.Call call) {
        this.call = call;
        return this;
    }
    public String contentType;
    public CallTransferResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CallTransferResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CallTransferResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}