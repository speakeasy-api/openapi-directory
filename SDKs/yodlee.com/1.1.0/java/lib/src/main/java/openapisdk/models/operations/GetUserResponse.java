package openapisdk.models.operations;



public class GetUserResponse {
    public String contentType;
    public GetUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserDetailResponse userDetailResponse;
    public GetUserResponse withUserDetailResponse(openapisdk.models.shared.UserDetailResponse userDetailResponse) {
        this.userDetailResponse = userDetailResponse;
        return this;
    }
}