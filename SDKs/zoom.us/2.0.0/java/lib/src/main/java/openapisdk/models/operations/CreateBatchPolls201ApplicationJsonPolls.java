package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBatchPolls201ApplicationJsonPolls {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CreateBatchPolls201ApplicationJsonPolls withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questions")
    public CreateBatchPolls201ApplicationJsonPollsQuestions[] questions;
    public CreateBatchPolls201ApplicationJsonPolls withQuestions(CreateBatchPolls201ApplicationJsonPollsQuestions[] questions) {
        this.questions = questions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CreateBatchPolls201ApplicationJsonPollsStatusEnum status;
    public CreateBatchPolls201ApplicationJsonPolls withStatus(CreateBatchPolls201ApplicationJsonPollsStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public CreateBatchPolls201ApplicationJsonPolls withTitle(String title) {
        this.title = title;
        return this;
    }
}