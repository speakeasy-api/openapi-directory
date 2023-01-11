package openapisdk.models.operations;



public class AddWordsToWordListResponse {
    public byte[] body;
    public AddWordsToWordListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AddWordsToWordListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddWordsToWordListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}