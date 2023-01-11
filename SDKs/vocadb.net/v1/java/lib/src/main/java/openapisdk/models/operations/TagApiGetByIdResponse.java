package openapisdk.models.operations;



public class TagApiGetByIdResponse {
    public byte[] body;
    public TagApiGetByIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public TagApiGetByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TagApiGetByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagForApiContract tagForApiContract;
    public TagApiGetByIdResponse withTagForApiContract(openapisdk.models.shared.TagForApiContract tagForApiContract) {
        this.tagForApiContract = tagForApiContract;
        return this;
    }
}