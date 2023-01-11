package openapisdk.models.operations;



public class CallHoldResponse {
    public openapisdk.models.shared.Call call;
    public CallHoldResponse withCall(openapisdk.models.shared.Call call) {
        this.call = call;
        return this;
    }
    public String contentType;
    public CallHoldResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CallHoldResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CallHoldResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}