package openapisdk.models.operations;



public class TagApiGetChildTagsResponse {
    public byte[] body;
    public TagApiGetChildTagsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public TagApiGetChildTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TagApiGetChildTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagForApiContract[] tagForApiContracts;
    public TagApiGetChildTagsResponse withTagForApiContracts(openapisdk.models.shared.TagForApiContract[] tagForApiContracts) {
        this.tagForApiContracts = tagForApiContracts;
        return this;
    }
}