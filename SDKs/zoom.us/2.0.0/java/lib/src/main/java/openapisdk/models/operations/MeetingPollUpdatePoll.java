package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * MeetingPollUpdatePoll
 * Poll
**/
public class MeetingPollUpdatePoll {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questions")
@SpeakeasyMetadata("multipartForm:name=questions,json")
    public MeetingPollUpdatePollQuestions[] questions;
    public MeetingPollUpdatePoll withQuestions(MeetingPollUpdatePollQuestions[] questions) {
        this.questions = questions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
@SpeakeasyMetadata("multipartForm:name=title")
    public String title;
    public MeetingPollUpdatePoll withTitle(String title) {
        this.title = title;
        return this;
    }
}