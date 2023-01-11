package openapisdk.models.operations;



public class TagApiPostNewTagResponse {
    public byte[] body;
    public TagApiPostNewTagResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public TagApiPostNewTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TagApiPostNewTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagBaseContract tagBaseContract;
    public TagApiPostNewTagResponse withTagBaseContract(openapisdk.models.shared.TagBaseContract tagBaseContract) {
        this.tagBaseContract = tagBaseContract;
        return this;
    }
}