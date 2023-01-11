package openapisdk.models.operations;



public class ActivityEntryApiGetListResponse {
    public byte[] body;
    public ActivityEntryApiGetListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ActivityEntryApiGetListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PartialFindResultActivityEntryForApiContract partialFindResultActivityEntryForApiContract;
    public ActivityEntryApiGetListResponse withPartialFindResultActivityEntryForApiContract(openapisdk.models.shared.PartialFindResultActivityEntryForApiContract partialFindResultActivityEntryForApiContract) {
        this.partialFindResultActivityEntryForApiContract = partialFindResultActivityEntryForApiContract;
        return this;
    }
    public Long statusCode;
    public ActivityEntryApiGetListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}