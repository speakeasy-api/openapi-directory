package openapisdk.models.operations;



public class ReleaseEventApiGetListResponse {
    public byte[] body;
    public ReleaseEventApiGetListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReleaseEventApiGetListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PartialFindResultReleaseEventForApiContract partialFindResultReleaseEventForApiContract;
    public ReleaseEventApiGetListResponse withPartialFindResultReleaseEventForApiContract(openapisdk.models.shared.PartialFindResultReleaseEventForApiContract partialFindResultReleaseEventForApiContract) {
        this.partialFindResultReleaseEventForApiContract = partialFindResultReleaseEventForApiContract;
        return this;
    }
    public Long statusCode;
    public ReleaseEventApiGetListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}