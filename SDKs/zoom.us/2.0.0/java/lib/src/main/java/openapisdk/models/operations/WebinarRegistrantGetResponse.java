package openapisdk.models.operations;



public class WebinarRegistrantGetResponse {
    public byte[] body;
    public WebinarRegistrantGetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public WebinarRegistrantGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WebinarRegistrantGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public WebinarRegistrantGetWebianrRegistrant webianrRegistrant;
    public WebinarRegistrantGetResponse withWebianrRegistrant(WebinarRegistrantGetWebianrRegistrant webianrRegistrant) {
        this.webianrRegistrant = webianrRegistrant;
        return this;
    }
}