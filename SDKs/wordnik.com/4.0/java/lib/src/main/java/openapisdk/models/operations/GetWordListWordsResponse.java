package openapisdk.models.operations;



public class GetWordListWordsResponse {
    public byte[] body;
    public GetWordListWordsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetWordListWordsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWordListWordsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}