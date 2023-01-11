package openapisdk.models.operations;



public class PutBasicSummaryJournalEntryResponse {
    public openapisdk.models.shared.CommonResponseType commonResponseType;
    public PutBasicSummaryJournalEntryResponse withCommonResponseType(openapisdk.models.shared.CommonResponseType commonResponseType) {
        this.commonResponseType = commonResponseType;
        return this;
    }
    public String contentType;
    public PutBasicSummaryJournalEntryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutBasicSummaryJournalEntryResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutBasicSummaryJournalEntryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}