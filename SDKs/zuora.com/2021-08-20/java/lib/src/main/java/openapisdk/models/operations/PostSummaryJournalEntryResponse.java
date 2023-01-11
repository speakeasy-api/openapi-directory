package openapisdk.models.operations;



public class PostSummaryJournalEntryResponse {
    public String contentType;
    public PostSummaryJournalEntryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostSummaryJournalEntryResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostJournalEntryResponseType postJournalEntryResponseType;
    public PostSummaryJournalEntryResponse withPostJournalEntryResponseType(openapisdk.models.shared.PostJournalEntryResponseType postJournalEntryResponseType) {
        this.postJournalEntryResponseType = postJournalEntryResponseType;
        return this;
    }
    public Long statusCode;
    public PostSummaryJournalEntryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}