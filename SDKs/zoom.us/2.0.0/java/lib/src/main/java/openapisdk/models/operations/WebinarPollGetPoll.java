package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarPollGetPoll
 * Poll
**/
public class WebinarPollGetPoll {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public WebinarPollGetPoll withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questions")
    public WebinarPollGetPollQuestions[] questions;
    public WebinarPollGetPoll withQuestions(WebinarPollGetPollQuestions[] questions) {
        this.questions = questions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public WebinarPollGetPollStatusEnum status;
    public WebinarPollGetPoll withStatus(WebinarPollGetPollStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public WebinarPollGetPoll withTitle(String title) {
        this.title = title;
        return this;
    }
}