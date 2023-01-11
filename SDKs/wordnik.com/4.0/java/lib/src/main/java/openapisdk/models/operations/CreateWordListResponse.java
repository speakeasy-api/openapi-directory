package openapisdk.models.operations;



public class CreateWordListResponse {
    public byte[] body;
    public CreateWordListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateWordListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateWordListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}