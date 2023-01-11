package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostHmacSignaturesRequest {
    public PostHmacSignaturesHeaders headers;
    public PostHmacSignaturesRequest withHeaders(PostHmacSignaturesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PosthmacSignatureType request;
    public PostHmacSignaturesRequest withRequest(openapisdk.models.shared.PosthmacSignatureType request) {
        this.request = request;
        return this;
    }
}