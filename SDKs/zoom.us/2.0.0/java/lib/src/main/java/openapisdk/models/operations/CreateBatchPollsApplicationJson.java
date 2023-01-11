package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBatchPollsApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questions")
    public CreateBatchPollsApplicationJsonQuestions[] questions;
    public CreateBatchPollsApplicationJson withQuestions(CreateBatchPollsApplicationJsonQuestions[] questions) {
        this.questions = questions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public CreateBatchPollsApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
}