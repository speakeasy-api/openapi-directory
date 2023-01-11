package openapisdk.models.operations;



public class CallAnswerResponse {
    public openapisdk.models.shared.Call call;
    public CallAnswerResponse withCall(openapisdk.models.shared.Call call) {
        this.call = call;
        return this;
    }
    public String contentType;
    public CallAnswerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CallAnswerResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CallAnswerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}