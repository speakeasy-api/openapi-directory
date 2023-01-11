package openapisdk.models.operations;



public class ReleaseEventSeriesApiGetListResponse {
    public byte[] body;
    public ReleaseEventSeriesApiGetListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReleaseEventSeriesApiGetListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PartialFindResultReleaseEventSeriesForApiContract partialFindResultReleaseEventSeriesForApiContract;
    public ReleaseEventSeriesApiGetListResponse withPartialFindResultReleaseEventSeriesForApiContract(openapisdk.models.shared.PartialFindResultReleaseEventSeriesForApiContract partialFindResultReleaseEventSeriesForApiContract) {
        this.partialFindResultReleaseEventSeriesForApiContract = partialFindResultReleaseEventSeriesForApiContract;
        return this;
    }
    public Long statusCode;
    public ReleaseEventSeriesApiGetListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}