package openapisdk.models.operations;



public class GetSummaryJournalEntryResponse {
    public String contentType;
    public GetSummaryJournalEntryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getJournalEntryDetailType;
    public GetSummaryJournalEntryResponse withGetJournalEntryDetailType(java.util.Map<String, Object> getJournalEntryDetailType) {
        this.getJournalEntryDetailType = getJournalEntryDetailType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetSummaryJournalEntryResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetSummaryJournalEntryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}