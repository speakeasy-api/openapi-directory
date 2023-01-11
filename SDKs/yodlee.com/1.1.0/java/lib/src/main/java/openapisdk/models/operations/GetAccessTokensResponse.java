package openapisdk.models.operations;



public class GetAccessTokensResponse {
    public String contentType;
    public GetAccessTokensResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAccessTokensResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserAccessTokensResponse userAccessTokensResponse;
    public GetAccessTokensResponse withUserAccessTokensResponse(openapisdk.models.shared.UserAccessTokensResponse userAccessTokensResponse) {
        this.userAccessTokensResponse = userAccessTokensResponse;
        return this;
    }
}