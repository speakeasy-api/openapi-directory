package openapisdk.models.operations;



public class GetWordListsForLoggedInUserResponse {
    public byte[] body;
    public GetWordListsForLoggedInUserResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetWordListsForLoggedInUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWordListsForLoggedInUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}