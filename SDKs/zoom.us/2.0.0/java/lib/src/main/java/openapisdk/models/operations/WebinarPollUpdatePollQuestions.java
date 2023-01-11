package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebinarPollUpdatePollQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answers")
    public String[] answers;
    public WebinarPollUpdatePollQuestions withAnswers(String[] answers) {
        this.answers = answers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public WebinarPollUpdatePollQuestions withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public WebinarPollUpdatePollQuestionsTypeEnum type;
    public WebinarPollUpdatePollQuestions withType(WebinarPollUpdatePollQuestionsTypeEnum type) {
        this.type = type;
        return this;
    }
}