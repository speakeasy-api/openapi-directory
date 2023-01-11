package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateStoredCredentialProfileRequest {
    public PostCreateStoredCredentialProfilePathParams pathParams;
    public PostCreateStoredCredentialProfileRequest withPathParams(PostCreateStoredCredentialProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostCreateStoredCredentialProfileHeaders headers;
    public PostCreateStoredCredentialProfileRequest withHeaders(PostCreateStoredCredentialProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateStoredCredentialProfileRequest request;
    public PostCreateStoredCredentialProfileRequest withRequest(openapisdk.models.shared.CreateStoredCredentialProfileRequest request) {
        this.request = request;
        return this;
    }
}