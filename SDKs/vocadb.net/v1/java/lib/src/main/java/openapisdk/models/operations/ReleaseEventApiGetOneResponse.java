package openapisdk.models.operations;



public class ReleaseEventApiGetOneResponse {
    public byte[] body;
    public ReleaseEventApiGetOneResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReleaseEventApiGetOneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReleaseEventForApiContract releaseEventForApiContract;
    public ReleaseEventApiGetOneResponse withReleaseEventForApiContract(openapisdk.models.shared.ReleaseEventForApiContract releaseEventForApiContract) {
        this.releaseEventForApiContract = releaseEventForApiContract;
        return this;
    }
    public Long statusCode;
    public ReleaseEventApiGetOneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}