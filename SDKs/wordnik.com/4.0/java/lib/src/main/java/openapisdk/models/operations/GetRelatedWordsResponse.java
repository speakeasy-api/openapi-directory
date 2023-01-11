package openapisdk.models.operations;



public class GetRelatedWordsResponse {
    public byte[] body;
    public GetRelatedWordsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetRelatedWordsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRelatedWordsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}