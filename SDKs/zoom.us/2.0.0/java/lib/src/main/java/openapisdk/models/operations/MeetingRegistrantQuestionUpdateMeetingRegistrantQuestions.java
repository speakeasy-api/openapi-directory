package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions
 * Meeting Registrant Questions
**/
public class MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_questions")
@SpeakeasyMetadata("multipartForm:name=custom_questions,json")
    public MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions[] customQuestions;
    public MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions withCustomQuestions(MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions[] customQuestions) {
        this.customQuestions = customQuestions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questions")
@SpeakeasyMetadata("multipartForm:name=questions,json")
    public MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestions[] questions;
    public MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions withQuestions(MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestions[] questions) {
        this.questions = questions;
        return this;
    }
}