package openapisdk.models.operations;



public class ListCallsResponse {
    public openapisdk.models.shared.Call[] calls;
    public ListCallsResponse withCalls(openapisdk.models.shared.Call[] calls) {
        this.calls = calls;
        return this;
    }
    public String contentType;
    public ListCallsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public ListCallsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public ListCallsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}