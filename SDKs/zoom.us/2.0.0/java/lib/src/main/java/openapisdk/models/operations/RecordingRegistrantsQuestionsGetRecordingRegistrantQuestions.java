package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions
 * Recording Registrant Questions
**/
public class RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_questions")
    public RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions[] customQuestions;
    public RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions withCustomQuestions(RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions[] customQuestions) {
        this.customQuestions = customQuestions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questions")
    public RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions[] questions;
    public RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions withQuestions(RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions[] questions) {
        this.questions = questions;
        return this;
    }
}