package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBatchPolls201ApplicationJsonPollsQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answers")
    public String[] answers;
    public CreateBatchPolls201ApplicationJsonPollsQuestions withAnswers(String[] answers) {
        this.answers = answers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateBatchPolls201ApplicationJsonPollsQuestions withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CreateBatchPolls201ApplicationJsonPollsQuestionsTypeEnum type;
    public CreateBatchPolls201ApplicationJsonPollsQuestions withType(CreateBatchPolls201ApplicationJsonPollsQuestionsTypeEnum type) {
        this.type = type;
        return this;
    }
}