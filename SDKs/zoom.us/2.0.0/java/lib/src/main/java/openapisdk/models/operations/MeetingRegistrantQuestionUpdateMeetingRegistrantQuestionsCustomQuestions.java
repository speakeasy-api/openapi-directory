package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answers")
    public String[] answers;
    public MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions withAnswers(String[] answers) {
        this.answers = answers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestionsTypeEnum type;
    public MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions withType(MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestionsTypeEnum type) {
        this.type = type;
        return this;
    }
}