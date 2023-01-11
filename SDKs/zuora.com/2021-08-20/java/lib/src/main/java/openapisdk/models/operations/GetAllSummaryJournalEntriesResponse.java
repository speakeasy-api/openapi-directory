package openapisdk.models.operations;



public class GetAllSummaryJournalEntriesResponse {
    public String contentType;
    public GetAllSummaryJournalEntriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetJournalEntriesInJournalRunType getJournalEntriesInJournalRunType;
    public GetAllSummaryJournalEntriesResponse withGetJournalEntriesInJournalRunType(openapisdk.models.shared.GetJournalEntriesInJournalRunType getJournalEntriesInJournalRunType) {
        this.getJournalEntriesInJournalRunType = getJournalEntriesInJournalRunType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetAllSummaryJournalEntriesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetAllSummaryJournalEntriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}