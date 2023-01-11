package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostJournalRunRequest {
    public PostJournalRunHeaders headers;
    public PostJournalRunRequest withHeaders(PostJournalRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostJournalRunType request;
    public PostJournalRunRequest withRequest(openapisdk.models.shared.PostJournalRunType request) {
        this.request = request;
        return this;
    }
}