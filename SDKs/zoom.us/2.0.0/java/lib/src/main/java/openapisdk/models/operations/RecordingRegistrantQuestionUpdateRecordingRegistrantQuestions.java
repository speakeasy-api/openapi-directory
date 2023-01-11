package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions
 * Recording Registrant Questions
**/
public class RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_questions")
@SpeakeasyMetadata("multipartForm:name=custom_questions,json")
    public RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions[] customQuestions;
    public RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions withCustomQuestions(RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions[] customQuestions) {
        this.customQuestions = customQuestions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questions")
@SpeakeasyMetadata("multipartForm:name=questions,json")
    public RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions[] questions;
    public RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions withQuestions(RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions[] questions) {
        this.questions = questions;
        return this;
    }
}