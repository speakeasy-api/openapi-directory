package openapisdk.models.operations;



public class DeleteSummaryJournalEntryResponse {
    public openapisdk.models.shared.CommonResponseType commonResponseType;
    public DeleteSummaryJournalEntryResponse withCommonResponseType(openapisdk.models.shared.CommonResponseType commonResponseType) {
        this.commonResponseType = commonResponseType;
        return this;
    }
    public String contentType;
    public DeleteSummaryJournalEntryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteSummaryJournalEntryResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteSummaryJournalEntryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}