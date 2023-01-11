package openapisdk.models.operations;



public class GetWordFrequencyResponse {
    public byte[] body;
    public GetWordFrequencyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetWordFrequencyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWordFrequencyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}