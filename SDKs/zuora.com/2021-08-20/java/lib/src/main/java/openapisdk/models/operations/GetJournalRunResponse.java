package openapisdk.models.operations;



public class GetJournalRunResponse {
    public String contentType;
    public GetJournalRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetJournalRunType getJournalRunType;
    public GetJournalRunResponse withGetJournalRunType(openapisdk.models.shared.GetJournalRunType getJournalRunType) {
        this.getJournalRunType = getJournalRunType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetJournalRunResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetJournalRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}