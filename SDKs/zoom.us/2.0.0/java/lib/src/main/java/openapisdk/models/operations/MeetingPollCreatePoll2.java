package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingPollCreatePoll2
 * Poll
**/
public class MeetingPollCreatePoll2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public MeetingPollCreatePoll2 withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questions")
    public MeetingPollCreatePollQuestions[] questions;
    public MeetingPollCreatePoll2 withQuestions(MeetingPollCreatePollQuestions[] questions) {
        this.questions = questions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public MeetingPollCreatePollStatusEnum status;
    public MeetingPollCreatePoll2 withStatus(MeetingPollCreatePollStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public MeetingPollCreatePoll2 withTitle(String title) {
        this.title = title;
        return this;
    }
}