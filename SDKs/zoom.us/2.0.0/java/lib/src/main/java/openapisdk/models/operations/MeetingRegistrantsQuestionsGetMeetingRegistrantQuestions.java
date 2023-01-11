package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions
 * Meeting Registrant Questions
**/
public class MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_questions")
    public MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions[] customQuestions;
    public MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions withCustomQuestions(MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions[] customQuestions) {
        this.customQuestions = customQuestions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questions")
    public MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions[] questions;
    public MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions withQuestions(MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions[] questions) {
        this.questions = questions;
        return this;
    }
}