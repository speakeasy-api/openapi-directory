package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarRegistrantQuestionUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions webinarRegistrantQuestions;
    public WebinarRegistrantQuestionUpdateRequests withWebinarRegistrantQuestions(WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions webinarRegistrantQuestions) {
        this.webinarRegistrantQuestions = webinarRegistrantQuestions;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions webinarRegistrantQuestions1;
    public WebinarRegistrantQuestionUpdateRequests withWebinarRegistrantQuestions1(WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions webinarRegistrantQuestions1) {
        this.webinarRegistrantQuestions1 = webinarRegistrantQuestions1;
        return this;
    }
}