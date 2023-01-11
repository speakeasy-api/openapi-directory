package openapisdk.models.operations;



public class UserApiGetEventsResponse {
    public byte[] body;
    public UserApiGetEventsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserApiGetEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReleaseEventForApiContract[] releaseEventForApiContracts;
    public UserApiGetEventsResponse withReleaseEventForApiContracts(openapisdk.models.shared.ReleaseEventForApiContract[] releaseEventForApiContracts) {
        this.releaseEventForApiContracts = releaseEventForApiContracts;
        return this;
    }
    public Long statusCode;
    public UserApiGetEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}