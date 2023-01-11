package openapisdk.models.operations;



public class WebinarRegistrantsQuestionsGetResponse {
    public byte[] body;
    public WebinarRegistrantsQuestionsGetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public WebinarRegistrantsQuestionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WebinarRegistrantsQuestionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public WebinarRegistrantsQuestionsGetWebinarRegistrantQuestions webinarRegistrantQuestions;
    public WebinarRegistrantsQuestionsGetResponse withWebinarRegistrantQuestions(WebinarRegistrantsQuestionsGetWebinarRegistrantQuestions webinarRegistrantQuestions) {
        this.webinarRegistrantQuestions = webinarRegistrantQuestions;
        return this;
    }
}