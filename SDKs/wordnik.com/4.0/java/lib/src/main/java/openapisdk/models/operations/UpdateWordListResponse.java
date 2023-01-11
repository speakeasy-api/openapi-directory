package openapisdk.models.operations;



public class UpdateWordListResponse {
    public byte[] body;
    public UpdateWordListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdateWordListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateWordListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}