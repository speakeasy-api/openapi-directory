package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBatchPollsMultipartFormDataQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answers")
    public String[] answers;
    public CreateBatchPollsMultipartFormDataQuestions withAnswers(String[] answers) {
        this.answers = answers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateBatchPollsMultipartFormDataQuestions withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CreateBatchPollsMultipartFormDataQuestionsTypeEnum type;
    public CreateBatchPollsMultipartFormDataQuestions withType(CreateBatchPollsMultipartFormDataQuestionsTypeEnum type) {
        this.type = type;
        return this;
    }
}