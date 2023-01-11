package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeetingPollUpdatePollQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answers")
    public String[] answers;
    public MeetingPollUpdatePollQuestions withAnswers(String[] answers) {
        this.answers = answers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public MeetingPollUpdatePollQuestions withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public MeetingPollUpdatePollQuestionsTypeEnum type;
    public MeetingPollUpdatePollQuestions withType(MeetingPollUpdatePollQuestionsTypeEnum type) {
        this.type = type;
        return this;
    }
}