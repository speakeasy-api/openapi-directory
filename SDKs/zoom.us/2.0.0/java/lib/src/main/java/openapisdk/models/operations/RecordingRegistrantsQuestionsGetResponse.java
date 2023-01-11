package openapisdk.models.operations;



public class RecordingRegistrantsQuestionsGetResponse {
    public byte[] body;
    public RecordingRegistrantsQuestionsGetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public RecordingRegistrantsQuestionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions recordingRegistrantQuestions;
    public RecordingRegistrantsQuestionsGetResponse withRecordingRegistrantQuestions(RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions recordingRegistrantQuestions) {
        this.recordingRegistrantQuestions = recordingRegistrantQuestions;
        return this;
    }
    public Long statusCode;
    public RecordingRegistrantsQuestionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}