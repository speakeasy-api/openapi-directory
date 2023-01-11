package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAChatbotMessageMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=account_id")
    public String accountId;
    public DeleteAChatbotMessageMultipartFormData withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=robot_jid")
    public String robotJid;
    public DeleteAChatbotMessageMultipartFormData withRobotJid(String robotJid) {
        this.robotJid = robotJid;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_jid")
    public String userJid;
    public DeleteAChatbotMessageMultipartFormData withUserJid(String userJid) {
        this.userJid = userJid;
        return this;
    }
}