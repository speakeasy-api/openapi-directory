package openapisdk.models.operations;



public class EntryTypesApiGetMappedTagResponse {
    public byte[] body;
    public EntryTypesApiGetMappedTagResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public EntryTypesApiGetMappedTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EntryTypesApiGetMappedTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagForApiContract tagForApiContract;
    public EntryTypesApiGetMappedTagResponse withTagForApiContract(openapisdk.models.shared.TagForApiContract tagForApiContract) {
        this.tagForApiContract = tagForApiContract;
        return this;
    }
}