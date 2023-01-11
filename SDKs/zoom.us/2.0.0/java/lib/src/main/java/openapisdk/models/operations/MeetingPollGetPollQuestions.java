package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeetingPollGetPollQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answers")
    public String[] answers;
    public MeetingPollGetPollQuestions withAnswers(String[] answers) {
        this.answers = answers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public MeetingPollGetPollQuestions withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public MeetingPollGetPollQuestionsTypeEnum type;
    public MeetingPollGetPollQuestions withType(MeetingPollGetPollQuestionsTypeEnum type) {
        this.type = type;
        return this;
    }
}