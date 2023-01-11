package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Call {
    @JsonProperty("accountId")
    public Long accountId;
    public Call withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answerTime")
    public LocalDate answerTime;
    public Call withAnswerTime(LocalDate answerTime) {
        this.answerTime = answerTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callerId")
    public String callerId;
    public Call withCallerId(String callerId) {
        this.callerId = callerId;
        return this;
    }
    @JsonProperty("direction")
    public CallDirectionEnum direction;
    public Call withDirection(CallDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonProperty("duration")
    public Long duration;
    public Call withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public LocalDate endTime;
    public Call withEndTime(LocalDate endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalId")
    public String externalId;
    public Call withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public Call withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public Call withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonProperty("startTime")
    public LocalDate startTime;
    public Call withStartTime(LocalDate startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonProperty("state")
    public CallStateEnum state;
    public Call withState(CallStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("type")
    public CallTypeEnum type;
    public Call withType(CallTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("uciId")
    public Long uciId;
    public Call withUciId(Long uciId) {
        this.uciId = uciId;
        return this;
    }
    @JsonProperty("userId")
    public Long userId;
    public Call withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}