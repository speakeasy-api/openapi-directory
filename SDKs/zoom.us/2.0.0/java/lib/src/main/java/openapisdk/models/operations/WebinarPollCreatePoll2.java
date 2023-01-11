package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarPollCreatePoll2
 * Poll
**/
public class WebinarPollCreatePoll2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public WebinarPollCreatePoll2 withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questions")
    public WebinarPollCreatePollQuestions[] questions;
    public WebinarPollCreatePoll2 withQuestions(WebinarPollCreatePollQuestions[] questions) {
        this.questions = questions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public WebinarPollCreatePollStatusEnum status;
    public WebinarPollCreatePoll2 withStatus(WebinarPollCreatePollStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public WebinarPollCreatePoll2 withTitle(String title) {
        this.title = title;
        return this;
    }
}