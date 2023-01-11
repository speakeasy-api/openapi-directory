package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarPollsPollListPoll
 * Poll
**/
public class WebinarPollsPollListPoll {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public WebinarPollsPollListPoll withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questions")
    public WebinarPollsPollListPollQuestions[] questions;
    public WebinarPollsPollListPoll withQuestions(WebinarPollsPollListPollQuestions[] questions) {
        this.questions = questions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public WebinarPollsPollListPollStatusEnum status;
    public WebinarPollsPollListPoll withStatus(WebinarPollsPollListPollStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public WebinarPollsPollListPoll withTitle(String title) {
        this.title = title;
        return this;
    }
}