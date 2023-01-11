package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * MeetingPollCreatePoll
 * Poll
**/
public class MeetingPollCreatePoll {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questions")
@SpeakeasyMetadata("multipartForm:name=questions,json")
    public MeetingPollCreatePollQuestions[] questions;
    public MeetingPollCreatePoll withQuestions(MeetingPollCreatePollQuestions[] questions) {
        this.questions = questions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
@SpeakeasyMetadata("multipartForm:name=title")
    public String title;
    public MeetingPollCreatePoll withTitle(String title) {
        this.title = title;
        return this;
    }
}