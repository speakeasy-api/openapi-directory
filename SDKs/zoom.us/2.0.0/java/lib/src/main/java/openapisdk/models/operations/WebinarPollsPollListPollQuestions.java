package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebinarPollsPollListPollQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answers")
    public String[] answers;
    public WebinarPollsPollListPollQuestions withAnswers(String[] answers) {
        this.answers = answers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public WebinarPollsPollListPollQuestions withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public WebinarPollsPollListPollQuestionsTypeEnum type;
    public WebinarPollsPollListPollQuestions withType(WebinarPollsPollListPollQuestionsTypeEnum type) {
        this.type = type;
        return this;
    }
}