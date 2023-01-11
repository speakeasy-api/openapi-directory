package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * UserTspCreateTspAccountsList
 * List of TSP accounts.
**/
public class UserTspCreateTspAccountsList {
    @JsonProperty("conference_code")
@SpeakeasyMetadata("multipartForm:name=conference_code")
    public String conferenceCode;
    public UserTspCreateTspAccountsList withConferenceCode(String conferenceCode) {
        this.conferenceCode = conferenceCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dial_in_numbers")
@SpeakeasyMetadata("multipartForm:name=dial_in_numbers,json")
    public UserTspCreateTspAccountsListDialInNumbers[] dialInNumbers;
    public UserTspCreateTspAccountsList withDialInNumbers(UserTspCreateTspAccountsListDialInNumbers[] dialInNumbers) {
        this.dialInNumbers = dialInNumbers;
        return this;
    }
    @JsonProperty("leader_pin")
@SpeakeasyMetadata("multipartForm:name=leader_pin")
    public String leaderPin;
    public UserTspCreateTspAccountsList withLeaderPin(String leaderPin) {
        this.leaderPin = leaderPin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tsp_bridge")
@SpeakeasyMetadata("multipartForm:name=tsp_bridge")
    public UserTspCreateTspAccountsListTspBridgeEnum tspBridge;
    public UserTspCreateTspAccountsList withTspBridge(UserTspCreateTspAccountsListTspBridgeEnum tspBridge) {
        this.tspBridge = tspBridge;
        return this;
    }
}