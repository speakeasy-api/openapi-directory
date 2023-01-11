package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSequenceSetsRequest {
    public PostSequenceSetsHeaders headers;
    public PostSequenceSetsRequest withHeaders(PostSequenceSetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostSequenceSetsRequest request;
    public PostSequenceSetsRequest withRequest(openapisdk.models.shared.PostSequenceSetsRequest request) {
        this.request = request;
        return this;
    }
}