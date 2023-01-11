package openapisdk.models.operations;



public class MeetingRegistrantsResponse {
    public byte[] body;
    public MeetingRegistrantsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MeetingRegistrantsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public MeetingRegistrantsRegistrationList registrationList;
    public MeetingRegistrantsResponse withRegistrationList(MeetingRegistrantsRegistrationList registrationList) {
        this.registrationList = registrationList;
        return this;
    }
    public Long statusCode;
    public MeetingRegistrantsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}