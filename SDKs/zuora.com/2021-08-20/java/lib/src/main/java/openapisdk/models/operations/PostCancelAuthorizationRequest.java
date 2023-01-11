package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelAuthorizationRequest {
    public PostCancelAuthorizationPathParams pathParams;
    public PostCancelAuthorizationRequest withPathParams(PostCancelAuthorizationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostCancelAuthorizationHeaders headers;
    public PostCancelAuthorizationRequest withHeaders(PostCancelAuthorizationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostVoidAuthorize request;
    public PostCancelAuthorizationRequest withRequest(openapisdk.models.shared.PostVoidAuthorize request) {
        this.request = request;
        return this;
    }
}