package openapisdk.models.operations;



public class CallUnoldResponse {
    public openapisdk.models.shared.Call call;
    public CallUnoldResponse withCall(openapisdk.models.shared.Call call) {
        this.call = call;
        return this;
    }
    public String contentType;
    public CallUnoldResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CallUnoldResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CallUnoldResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}