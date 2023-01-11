package openapisdk.models.operations;



public class UserCtrlGetUserByIdResponse {
    public String contentType;
    public UserCtrlGetUserByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public UserCtrlGetUserByIdResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public UserCtrlGetUserByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserHalResponse userHalResponse;
    public UserCtrlGetUserByIdResponse withUserHalResponse(openapisdk.models.shared.UserHalResponse userHalResponse) {
        this.userHalResponse = userHalResponse;
        return this;
    }
}