package openapisdk.models.operations;



public class GetTextPronunciationsResponse {
    public byte[] body;
    public GetTextPronunciationsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetTextPronunciationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTextPronunciationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}