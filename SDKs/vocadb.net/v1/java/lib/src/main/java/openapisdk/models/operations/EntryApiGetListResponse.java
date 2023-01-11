package openapisdk.models.operations;



public class EntryApiGetListResponse {
    public byte[] body;
    public EntryApiGetListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public EntryApiGetListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PartialFindResultEntryForApiContract partialFindResultEntryForApiContract;
    public EntryApiGetListResponse withPartialFindResultEntryForApiContract(openapisdk.models.shared.PartialFindResultEntryForApiContract partialFindResultEntryForApiContract) {
        this.partialFindResultEntryForApiContract = partialFindResultEntryForApiContract;
        return this;
    }
    public Long statusCode;
    public EntryApiGetListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}