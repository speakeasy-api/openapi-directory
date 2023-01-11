package openapisdk.models.operations;



public class PostJournalRunResponse {
    public String contentType;
    public PostJournalRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostJournalRunResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostJournalRunResponseType postJournalRunResponseType;
    public PostJournalRunResponse withPostJournalRunResponseType(openapisdk.models.shared.PostJournalRunResponseType postJournalRunResponseType) {
        this.postJournalRunResponseType = postJournalRunResponseType;
        return this;
    }
    public Long statusCode;
    public PostJournalRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}