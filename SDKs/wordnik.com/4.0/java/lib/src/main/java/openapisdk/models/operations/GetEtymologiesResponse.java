package openapisdk.models.operations;



public class GetEtymologiesResponse {
    public byte[] body;
    public GetEtymologiesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetEtymologiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEtymologiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}