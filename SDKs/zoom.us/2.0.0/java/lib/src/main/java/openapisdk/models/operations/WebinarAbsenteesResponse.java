package openapisdk.models.operations;



public class WebinarAbsenteesResponse {
    public byte[] body;
    public WebinarAbsenteesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public WebinarAbsenteesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public WebinarAbsenteesRegistrationList registrationList;
    public WebinarAbsenteesResponse withRegistrationList(WebinarAbsenteesRegistrationList registrationList) {
        this.registrationList = registrationList;
        return this;
    }
    public Long statusCode;
    public WebinarAbsenteesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}