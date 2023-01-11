package openapisdk.models.operations;



public class PostSequenceSetsResponse {
    public String contentType;
    public PostSequenceSetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostSequenceSetsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostSequenceSetsResponse postSequenceSetsResponse;
    public PostSequenceSetsResponse withPostSequenceSetsResponse(openapisdk.models.shared.PostSequenceSetsResponse postSequenceSetsResponse) {
        this.postSequenceSetsResponse = postSequenceSetsResponse;
        return this;
    }
    public Long statusCode;
    public PostSequenceSetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}