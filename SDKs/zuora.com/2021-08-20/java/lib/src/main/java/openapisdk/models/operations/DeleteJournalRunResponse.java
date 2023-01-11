package openapisdk.models.operations;



public class DeleteJournalRunResponse {
    public openapisdk.models.shared.CommonResponseType commonResponseType;
    public DeleteJournalRunResponse withCommonResponseType(openapisdk.models.shared.CommonResponseType commonResponseType) {
        this.commonResponseType = commonResponseType;
        return this;
    }
    public String contentType;
    public DeleteJournalRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteJournalRunResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteJournalRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}