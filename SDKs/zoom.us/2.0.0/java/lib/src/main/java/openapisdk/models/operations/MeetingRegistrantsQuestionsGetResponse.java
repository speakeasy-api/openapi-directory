package openapisdk.models.operations;



public class MeetingRegistrantsQuestionsGetResponse {
    public byte[] body;
    public MeetingRegistrantsQuestionsGetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MeetingRegistrantsQuestionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions meetingRegistrantQuestions;
    public MeetingRegistrantsQuestionsGetResponse withMeetingRegistrantQuestions(MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions meetingRegistrantQuestions) {
        this.meetingRegistrantQuestions = meetingRegistrantQuestions;
        return this;
    }
    public Long statusCode;
    public MeetingRegistrantsQuestionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}