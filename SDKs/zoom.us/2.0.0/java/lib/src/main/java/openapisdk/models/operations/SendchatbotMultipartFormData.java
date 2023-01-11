package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendchatbotMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=account_id")
    public String accountId;
    public SendchatbotMultipartFormData withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=content,json")
    public java.util.Map<String, Object> content;
    public SendchatbotMultipartFormData withContent(java.util.Map<String, Object> content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=is_markdown_support")
    public Boolean isMarkdownSupport;
    public SendchatbotMultipartFormData withIsMarkdownSupport(Boolean isMarkdownSupport) {
        this.isMarkdownSupport = isMarkdownSupport;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=robot_jid")
    public String robotJid;
    public SendchatbotMultipartFormData withRobotJid(String robotJid) {
        this.robotJid = robotJid;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=to_jid")
    public String toJid;
    public SendchatbotMultipartFormData withToJid(String toJid) {
        this.toJid = toJid;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_jid")
    public String userJid;
    public SendchatbotMultipartFormData withUserJid(String userJid) {
        this.userJid = userJid;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=visible_to_user")
    public String visibleToUser;
    public SendchatbotMultipartFormData withVisibleToUser(String visibleToUser) {
        this.visibleToUser = visibleToUser;
        return this;
    }
}