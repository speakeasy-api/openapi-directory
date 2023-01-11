package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserTspTspAccount
 * TSP account of the user.
**/
public class UserTspTspAccount {
    @JsonProperty("conference_code")
    public String conferenceCode;
    public UserTspTspAccount withConferenceCode(String conferenceCode) {
        this.conferenceCode = conferenceCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dial_in_numbers")
    public UserTspTspAccountDialInNumbers[] dialInNumbers;
    public UserTspTspAccount withDialInNumbers(UserTspTspAccountDialInNumbers[] dialInNumbers) {
        this.dialInNumbers = dialInNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public UserTspTspAccount withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("leader_pin")
    public String leaderPin;
    public UserTspTspAccount withLeaderPin(String leaderPin) {
        this.leaderPin = leaderPin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tsp_bridge")
    public UserTspTspAccountTspBridgeEnum tspBridge;
    public UserTspTspAccount withTspBridge(UserTspTspAccountTspBridgeEnum tspBridge) {
        this.tspBridge = tspBridge;
        return this;
    }
}