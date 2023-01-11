package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteAChatbotMessage200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message_id")
    public String messageId;
    public DeleteAChatbotMessage200ApplicationJson withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("robot_jid")
    public String robotJid;
    public DeleteAChatbotMessage200ApplicationJson withRobotJid(String robotJid) {
        this.robotJid = robotJid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sent_time")
    public String sentTime;
    public DeleteAChatbotMessage200ApplicationJson withSentTime(String sentTime) {
        this.sentTime = sentTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to_jid")
    public String toJid;
    public DeleteAChatbotMessage200ApplicationJson withToJid(String toJid) {
        this.toJid = toJid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_jid")
    public String userJid;
    public DeleteAChatbotMessage200ApplicationJson withUserJid(String userJid) {
        this.userJid = userJid;
        return this;
    }
}