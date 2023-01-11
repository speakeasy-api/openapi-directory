package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingPollsPollListPoll
 * Poll
**/
public class MeetingPollsPollListPoll {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public MeetingPollsPollListPoll withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questions")
    public MeetingPollsPollListPollQuestions[] questions;
    public MeetingPollsPollListPoll withQuestions(MeetingPollsPollListPollQuestions[] questions) {
        this.questions = questions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public MeetingPollsPollListPollStatusEnum status;
    public MeetingPollsPollListPoll withStatus(MeetingPollsPollListPollStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public MeetingPollsPollListPoll withTitle(String title) {
        this.title = title;
        return this;
    }
}