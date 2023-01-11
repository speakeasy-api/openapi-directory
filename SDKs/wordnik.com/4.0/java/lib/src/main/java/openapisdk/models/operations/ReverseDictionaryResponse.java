package openapisdk.models.operations;



public class ReverseDictionaryResponse {
    public byte[] body;
    public ReverseDictionaryResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReverseDictionaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReverseDictionaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}