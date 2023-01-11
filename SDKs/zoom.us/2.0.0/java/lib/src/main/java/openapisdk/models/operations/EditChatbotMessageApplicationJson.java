package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditChatbotMessageApplicationJson {
    @JsonProperty("account_id")
    public String accountId;
    public EditChatbotMessageApplicationJson withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("content")
    public java.util.Map<String, Object> content;
    public EditChatbotMessageApplicationJson withContent(java.util.Map<String, Object> content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_markdown_support")
    public Boolean isMarkdownSupport;
    public EditChatbotMessageApplicationJson withIsMarkdownSupport(Boolean isMarkdownSupport) {
        this.isMarkdownSupport = isMarkdownSupport;
        return this;
    }
    @JsonProperty("robot_jid")
    public String robotJid;
    public EditChatbotMessageApplicationJson withRobotJid(String robotJid) {
        this.robotJid = robotJid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_jid")
    public String userJid;
    public EditChatbotMessageApplicationJson withUserJid(String userJid) {
        this.userJid = userJid;
        return this;
    }
}