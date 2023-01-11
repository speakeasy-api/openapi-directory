package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateEmailTemplateRequest {
    public PostCreateEmailTemplateHeaders headers;
    public PostCreateEmailTemplateRequest withHeaders(PostCreateEmailTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostPublicEmailTemplateRequest request;
    public PostCreateEmailTemplateRequest withRequest(openapisdk.models.shared.PostPublicEmailTemplateRequest request) {
        this.request = request;
        return this;
    }
}