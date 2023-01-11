package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answers")
    public String[] answers;
    public MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions withAnswers(String[] answers) {
        this.answers = answers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestionsTypeEnum type;
    public MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions withType(MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestionsTypeEnum type) {
        this.type = type;
        return this;
    }
}