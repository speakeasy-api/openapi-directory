package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSummaryJournalEntryRequest {
    public PostSummaryJournalEntryHeaders headers;
    public PostSummaryJournalEntryRequest withHeaders(PostSummaryJournalEntryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostSummaryJournalEntryRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}