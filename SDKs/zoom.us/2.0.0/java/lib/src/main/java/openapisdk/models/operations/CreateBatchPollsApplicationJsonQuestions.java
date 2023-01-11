package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBatchPollsApplicationJsonQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answers")
    public String[] answers;
    public CreateBatchPollsApplicationJsonQuestions withAnswers(String[] answers) {
        this.answers = answers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateBatchPollsApplicationJsonQuestions withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CreateBatchPollsApplicationJsonQuestionsTypeEnum type;
    public CreateBatchPollsApplicationJsonQuestions withType(CreateBatchPollsApplicationJsonQuestionsTypeEnum type) {
        this.type = type;
        return this;
    }
}