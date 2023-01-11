package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer
 * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
**/
public class WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_anonymous_questions")
    public Boolean allowAnonymousQuestions;
    public WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer withAllowAnonymousQuestions(Boolean allowAnonymousQuestions) {
        this.allowAnonymousQuestions = allowAnonymousQuestions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answer_questions")
    public WebinarCreate201ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum answerQuestions;
    public WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer withAnswerQuestions(WebinarCreate201ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum answerQuestions) {
        this.answerQuestions = answerQuestions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attendees_can_comment")
    public Boolean attendeesCanComment;
    public WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer withAttendeesCanComment(Boolean attendeesCanComment) {
        this.attendeesCanComment = attendeesCanComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attendees_can_upvote")
    public Boolean attendeesCanUpvote;
    public WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer withAttendeesCanUpvote(Boolean attendeesCanUpvote) {
        this.attendeesCanUpvote = attendeesCanUpvote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
}