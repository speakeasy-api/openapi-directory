package openapisdk.models.operations;



public class UserCtrlGetUsersResponse {
    public String contentType;
    public UserCtrlGetUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserCtrlGetUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UsersHalResponse usersHalResponse;
    public UserCtrlGetUsersResponse withUsersHalResponse(openapisdk.models.shared.UsersHalResponse usersHalResponse) {
        this.usersHalResponse = usersHalResponse;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorsResponse validationErrorsResponse;
    public UserCtrlGetUsersResponse withValidationErrorsResponse(openapisdk.models.shared.ValidationErrorsResponse validationErrorsResponse) {
        this.validationErrorsResponse = validationErrorsResponse;
        return this;
    }
}