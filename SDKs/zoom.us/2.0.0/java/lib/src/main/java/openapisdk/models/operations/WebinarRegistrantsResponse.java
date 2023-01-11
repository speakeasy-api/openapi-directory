package openapisdk.models.operations;



public class WebinarRegistrantsResponse {
    public byte[] body;
    public WebinarRegistrantsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public WebinarRegistrantsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public WebinarRegistrantsRegistrationList registrationList;
    public WebinarRegistrantsResponse withRegistrationList(WebinarRegistrantsRegistrationList registrationList) {
        this.registrationList = registrationList;
        return this;
    }
    public Long statusCode;
    public WebinarRegistrantsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}