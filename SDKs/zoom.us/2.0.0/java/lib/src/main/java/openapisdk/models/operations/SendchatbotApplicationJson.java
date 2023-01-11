package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendchatbotApplicationJson {
    @JsonProperty("account_id")
    public String accountId;
    public SendchatbotApplicationJson withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("content")
    public java.util.Map<String, Object> content;
    public SendchatbotApplicationJson withContent(java.util.Map<String, Object> content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_markdown_support")
    public Boolean isMarkdownSupport;
    public SendchatbotApplicationJson withIsMarkdownSupport(Boolean isMarkdownSupport) {
        this.isMarkdownSupport = isMarkdownSupport;
        return this;
    }
    @JsonProperty("robot_jid")
    public String robotJid;
    public SendchatbotApplicationJson withRobotJid(String robotJid) {
        this.robotJid = robotJid;
        return this;
    }
    @JsonProperty("to_jid")
    public String toJid;
    public SendchatbotApplicationJson withToJid(String toJid) {
        this.toJid = toJid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_jid")
    public String userJid;
    public SendchatbotApplicationJson withUserJid(String userJid) {
        this.userJid = userJid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visible_to_user")
    public String visibleToUser;
    public SendchatbotApplicationJson withVisibleToUser(String visibleToUser) {
        this.visibleToUser = visibleToUser;
        return this;
    }
}