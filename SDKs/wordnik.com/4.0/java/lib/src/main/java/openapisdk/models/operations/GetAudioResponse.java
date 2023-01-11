package openapisdk.models.operations;



public class GetAudioResponse {
    public byte[] body;
    public GetAudioResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAudioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAudioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}