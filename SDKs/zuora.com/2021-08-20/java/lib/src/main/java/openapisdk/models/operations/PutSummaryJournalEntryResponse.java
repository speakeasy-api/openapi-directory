package openapisdk.models.operations;



public class PutSummaryJournalEntryResponse {
    public openapisdk.models.shared.CommonResponseType commonResponseType;
    public PutSummaryJournalEntryResponse withCommonResponseType(openapisdk.models.shared.CommonResponseType commonResponseType) {
        this.commonResponseType = commonResponseType;
        return this;
    }
    public String contentType;
    public PutSummaryJournalEntryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutSummaryJournalEntryResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutSummaryJournalEntryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}