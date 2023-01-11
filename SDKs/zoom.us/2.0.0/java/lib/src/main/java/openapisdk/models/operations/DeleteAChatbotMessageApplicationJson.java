package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteAChatbotMessageApplicationJson {
    @JsonProperty("account_id")
    public String accountId;
    public DeleteAChatbotMessageApplicationJson withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("robot_jid")
    public String robotJid;
    public DeleteAChatbotMessageApplicationJson withRobotJid(String robotJid) {
        this.robotJid = robotJid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_jid")
    public String userJid;
    public DeleteAChatbotMessageApplicationJson withUserJid(String userJid) {
        this.userJid = userJid;
        return this;
    }
}