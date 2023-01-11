package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Webinar200ApplicationJsonSettingsQuestionAndAnswer
 * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
**/
public class Webinar200ApplicationJsonSettingsQuestionAndAnswer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_anonymous_questions")
    public Boolean allowAnonymousQuestions;
    public Webinar200ApplicationJsonSettingsQuestionAndAnswer withAllowAnonymousQuestions(Boolean allowAnonymousQuestions) {
        this.allowAnonymousQuestions = allowAnonymousQuestions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answer_questions")
    public Webinar200ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum answerQuestions;
    public Webinar200ApplicationJsonSettingsQuestionAndAnswer withAnswerQuestions(Webinar200ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum answerQuestions) {
        this.answerQuestions = answerQuestions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attendees_can_comment")
    public Boolean attendeesCanComment;
    public Webinar200ApplicationJsonSettingsQuestionAndAnswer withAttendeesCanComment(Boolean attendeesCanComment) {
        this.attendeesCanComment = attendeesCanComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attendees_can_upvote")
    public Boolean attendeesCanUpvote;
    public Webinar200ApplicationJsonSettingsQuestionAndAnswer withAttendeesCanUpvote(Boolean attendeesCanUpvote) {
        this.attendeesCanUpvote = attendeesCanUpvote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public Webinar200ApplicationJsonSettingsQuestionAndAnswer withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
}