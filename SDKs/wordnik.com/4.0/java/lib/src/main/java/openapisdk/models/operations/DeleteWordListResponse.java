package openapisdk.models.operations;



public class DeleteWordListResponse {
    public byte[] body;
    public DeleteWordListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeleteWordListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteWordListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}