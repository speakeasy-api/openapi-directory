package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserTsPs200ApplicationJsonTspAccountsList
 * List of TSP accounts.
**/
public class UserTsPs200ApplicationJsonTspAccountsList {
    @JsonProperty("conference_code")
    public String conferenceCode;
    public UserTsPs200ApplicationJsonTspAccountsList withConferenceCode(String conferenceCode) {
        this.conferenceCode = conferenceCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dial_in_numbers")
    public UserTsPs200ApplicationJsonTspAccountsListDialInNumbers[] dialInNumbers;
    public UserTsPs200ApplicationJsonTspAccountsList withDialInNumbers(UserTsPs200ApplicationJsonTspAccountsListDialInNumbers[] dialInNumbers) {
        this.dialInNumbers = dialInNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public UserTsPs200ApplicationJsonTspAccountsList withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("leader_pin")
    public String leaderPin;
    public UserTsPs200ApplicationJsonTspAccountsList withLeaderPin(String leaderPin) {
        this.leaderPin = leaderPin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tsp_bridge")
    public UserTsPs200ApplicationJsonTspAccountsListTspBridgeEnum tspBridge;
    public UserTsPs200ApplicationJsonTspAccountsList withTspBridge(UserTsPs200ApplicationJsonTspAccountsListTspBridgeEnum tspBridge) {
        this.tspBridge = tspBridge;
        return this;
    }
}