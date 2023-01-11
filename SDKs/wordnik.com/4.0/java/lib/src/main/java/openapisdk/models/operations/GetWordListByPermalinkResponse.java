package openapisdk.models.operations;



public class GetWordListByPermalinkResponse {
    public byte[] body;
    public GetWordListByPermalinkResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetWordListByPermalinkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWordListByPermalinkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}