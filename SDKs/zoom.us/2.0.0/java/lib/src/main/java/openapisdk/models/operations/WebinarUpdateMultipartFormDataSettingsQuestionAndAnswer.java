package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer
 * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
**/
public class WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_anonymous_questions")
    public Boolean allowAnonymousQuestions;
    public WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer withAllowAnonymousQuestions(Boolean allowAnonymousQuestions) {
        this.allowAnonymousQuestions = allowAnonymousQuestions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answer_questions")
    public WebinarUpdateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum answerQuestions;
    public WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer withAnswerQuestions(WebinarUpdateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum answerQuestions) {
        this.answerQuestions = answerQuestions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attendees_can_comment")
    public Boolean attendeesCanComment;
    public WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer withAttendeesCanComment(Boolean attendeesCanComment) {
        this.attendeesCanComment = attendeesCanComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attendees_can_upvote")
    public Boolean attendeesCanUpvote;
    public WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer withAttendeesCanUpvote(Boolean attendeesCanUpvote) {
        this.attendeesCanUpvote = attendeesCanUpvote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
}