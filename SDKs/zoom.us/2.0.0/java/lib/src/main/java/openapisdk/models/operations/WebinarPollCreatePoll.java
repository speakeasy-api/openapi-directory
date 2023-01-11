package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * WebinarPollCreatePoll
 * Poll
**/
public class WebinarPollCreatePoll {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questions")
@SpeakeasyMetadata("multipartForm:name=questions,json")
    public WebinarPollCreatePollQuestions[] questions;
    public WebinarPollCreatePoll withQuestions(WebinarPollCreatePollQuestions[] questions) {
        this.questions = questions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
@SpeakeasyMetadata("multipartForm:name=title")
    public String title;
    public WebinarPollCreatePoll withTitle(String title) {
        this.title = title;
        return this;
    }
}