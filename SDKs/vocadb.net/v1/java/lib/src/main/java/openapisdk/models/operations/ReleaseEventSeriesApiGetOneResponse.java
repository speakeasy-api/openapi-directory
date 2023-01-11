package openapisdk.models.operations;



public class ReleaseEventSeriesApiGetOneResponse {
    public byte[] body;
    public ReleaseEventSeriesApiGetOneResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReleaseEventSeriesApiGetOneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReleaseEventSeriesForApiContract releaseEventSeriesForApiContract;
    public ReleaseEventSeriesApiGetOneResponse withReleaseEventSeriesForApiContract(openapisdk.models.shared.ReleaseEventSeriesForApiContract releaseEventSeriesForApiContract) {
        this.releaseEventSeriesForApiContract = releaseEventSeriesForApiContract;
        return this;
    }
    public Long statusCode;
    public ReleaseEventSeriesApiGetOneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}