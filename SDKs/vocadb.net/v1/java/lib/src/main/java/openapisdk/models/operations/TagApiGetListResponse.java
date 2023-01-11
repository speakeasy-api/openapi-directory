package openapisdk.models.operations;



public class TagApiGetListResponse {
    public byte[] body;
    public TagApiGetListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public TagApiGetListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PartialFindResultTagForApiContract partialFindResultTagForApiContract;
    public TagApiGetListResponse withPartialFindResultTagForApiContract(openapisdk.models.shared.PartialFindResultTagForApiContract partialFindResultTagForApiContract) {
        this.partialFindResultTagForApiContract = partialFindResultTagForApiContract;
        return this;
    }
    public Long statusCode;
    public TagApiGetListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}