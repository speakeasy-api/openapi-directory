package openapisdk.models.operations;



public class TagApiGetTopTagsResponse {
    public byte[] body;
    public TagApiGetTopTagsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public TagApiGetTopTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TagApiGetTopTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagBaseContract[] tagBaseContracts;
    public TagApiGetTopTagsResponse withTagBaseContracts(openapisdk.models.shared.TagBaseContract[] tagBaseContracts) {
        this.tagBaseContracts = tagBaseContracts;
        return this;
    }
}