package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditChatbotMessageMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=account_id")
    public String accountId;
    public EditChatbotMessageMultipartFormData withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=content,json")
    public java.util.Map<String, Object> content;
    public EditChatbotMessageMultipartFormData withContent(java.util.Map<String, Object> content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=is_markdown_support")
    public Boolean isMarkdownSupport;
    public EditChatbotMessageMultipartFormData withIsMarkdownSupport(Boolean isMarkdownSupport) {
        this.isMarkdownSupport = isMarkdownSupport;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=robot_jid")
    public String robotJid;
    public EditChatbotMessageMultipartFormData withRobotJid(String robotJid) {
        this.robotJid = robotJid;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_jid")
    public String userJid;
    public EditChatbotMessageMultipartFormData withUserJid(String userJid) {
        this.userJid = userJid;
        return this;
    }
}