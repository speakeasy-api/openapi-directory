package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingPollGetPoll
 * Poll
**/
public class MeetingPollGetPoll {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public MeetingPollGetPoll withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questions")
    public MeetingPollGetPollQuestions[] questions;
    public MeetingPollGetPoll withQuestions(MeetingPollGetPollQuestions[] questions) {
        this.questions = questions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public MeetingPollGetPollStatusEnum status;
    public MeetingPollGetPoll withStatus(MeetingPollGetPollStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public MeetingPollGetPoll withTitle(String title) {
        this.title = title;
        return this;
    }
}