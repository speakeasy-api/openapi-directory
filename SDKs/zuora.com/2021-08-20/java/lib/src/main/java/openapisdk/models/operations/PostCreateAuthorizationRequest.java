package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateAuthorizationRequest {
    public PostCreateAuthorizationPathParams pathParams;
    public PostCreateAuthorizationRequest withPathParams(PostCreateAuthorizationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostCreateAuthorizationHeaders headers;
    public PostCreateAuthorizationRequest withHeaders(PostCreateAuthorizationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostDelayAuthorizeCapture request;
    public PostCreateAuthorizationRequest withRequest(openapisdk.models.shared.PostDelayAuthorizeCapture request) {
        this.request = request;
        return this;
    }
}