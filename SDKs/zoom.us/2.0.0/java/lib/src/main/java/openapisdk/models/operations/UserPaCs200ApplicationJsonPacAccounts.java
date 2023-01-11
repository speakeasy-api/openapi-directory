package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserPaCs200ApplicationJsonPacAccounts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conference_id")
    public Long conferenceId;
    public UserPaCs200ApplicationJsonPacAccounts withConferenceId(Long conferenceId) {
        this.conferenceId = conferenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dedicated_dial_in_number")
    public UserPaCs200ApplicationJsonPacAccountsDedicatedDialInNumber[] dedicatedDialInNumber;
    public UserPaCs200ApplicationJsonPacAccounts withDedicatedDialInNumber(UserPaCs200ApplicationJsonPacAccountsDedicatedDialInNumber[] dedicatedDialInNumber) {
        this.dedicatedDialInNumber = dedicatedDialInNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("global_dial_in_numbers")
    public UserPaCs200ApplicationJsonPacAccountsGlobalDialInNumbers[] globalDialInNumbers;
    public UserPaCs200ApplicationJsonPacAccounts withGlobalDialInNumbers(UserPaCs200ApplicationJsonPacAccountsGlobalDialInNumbers[] globalDialInNumbers) {
        this.globalDialInNumbers = globalDialInNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listen_only_password")
    public String listenOnlyPassword;
    public UserPaCs200ApplicationJsonPacAccounts withListenOnlyPassword(String listenOnlyPassword) {
        this.listenOnlyPassword = listenOnlyPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_password")
    public String participantPassword;
    public UserPaCs200ApplicationJsonPacAccounts withParticipantPassword(String participantPassword) {
        this.participantPassword = participantPassword;
        return this;
    }
}