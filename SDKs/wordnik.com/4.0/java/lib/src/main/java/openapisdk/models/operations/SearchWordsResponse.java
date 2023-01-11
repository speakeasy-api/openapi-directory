package openapisdk.models.operations;



public class SearchWordsResponse {
    public byte[] body;
    public SearchWordsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SearchWordsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SearchWordsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}