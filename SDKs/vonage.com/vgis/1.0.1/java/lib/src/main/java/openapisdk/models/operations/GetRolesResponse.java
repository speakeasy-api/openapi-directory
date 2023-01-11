package openapisdk.models.operations;



public class GetRolesResponse {
    public openapisdk.models.shared.Call[] calls;
    public GetRolesResponse withCalls(openapisdk.models.shared.Call[] calls) {
        this.calls = calls;
        return this;
    }
    public String contentType;
    public GetRolesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetRolesResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetRolesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}