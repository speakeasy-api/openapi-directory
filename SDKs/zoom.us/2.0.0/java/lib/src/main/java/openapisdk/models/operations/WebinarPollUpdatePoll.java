package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * WebinarPollUpdatePoll
 * Poll
**/
public class WebinarPollUpdatePoll {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questions")
@SpeakeasyMetadata("multipartForm:name=questions,json")
    public WebinarPollUpdatePollQuestions[] questions;
    public WebinarPollUpdatePoll withQuestions(WebinarPollUpdatePollQuestions[] questions) {
        this.questions = questions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
@SpeakeasyMetadata("multipartForm:name=title")
    public String title;
    public WebinarPollUpdatePoll withTitle(String title) {
        this.title = title;
        return this;
    }
}