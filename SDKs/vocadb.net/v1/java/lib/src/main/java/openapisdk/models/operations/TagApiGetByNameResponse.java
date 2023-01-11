package openapisdk.models.operations;



public class TagApiGetByNameResponse {
    public byte[] body;
    public TagApiGetByNameResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public TagApiGetByNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TagApiGetByNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagForApiContract tagForApiContract;
    public TagApiGetByNameResponse withTagForApiContract(openapisdk.models.shared.TagForApiContract tagForApiContract) {
        this.tagForApiContract = tagForApiContract;
        return this;
    }
}