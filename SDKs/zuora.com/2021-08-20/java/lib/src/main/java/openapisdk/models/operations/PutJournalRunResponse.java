package openapisdk.models.operations;



public class PutJournalRunResponse {
    public openapisdk.models.shared.CommonResponseType commonResponseType;
    public PutJournalRunResponse withCommonResponseType(openapisdk.models.shared.CommonResponseType commonResponseType) {
        this.commonResponseType = commonResponseType;
        return this;
    }
    public String contentType;
    public PutJournalRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutJournalRunResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutJournalRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}