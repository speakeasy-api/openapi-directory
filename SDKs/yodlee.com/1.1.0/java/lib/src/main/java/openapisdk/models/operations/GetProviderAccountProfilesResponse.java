package openapisdk.models.operations;



public class GetProviderAccountProfilesResponse {
    public String contentType;
    public GetProviderAccountProfilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProviderAccountUserProfileResponse providerAccountUserProfileResponse;
    public GetProviderAccountProfilesResponse withProviderAccountUserProfileResponse(openapisdk.models.shared.ProviderAccountUserProfileResponse providerAccountUserProfileResponse) {
        this.providerAccountUserProfileResponse = providerAccountUserProfileResponse;
        return this;
    }
    public Long statusCode;
    public GetProviderAccountProfilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}