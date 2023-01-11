package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutBasicSummaryJournalEntryRequest {
    public PutBasicSummaryJournalEntryPathParams pathParams;
    public PutBasicSummaryJournalEntryRequest withPathParams(PutBasicSummaryJournalEntryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutBasicSummaryJournalEntryHeaders headers;
    public PutBasicSummaryJournalEntryRequest withHeaders(PutBasicSummaryJournalEntryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutBasicSummaryJournalEntryRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}