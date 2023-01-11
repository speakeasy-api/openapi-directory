package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountCreateApplicationJsonOptions
 * Account options object.
**/
public class AccountCreateApplicationJsonOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing_auto_renew")
    public Boolean billingAutoRenew;
    public AccountCreateApplicationJsonOptions withBillingAutoRenew(Boolean billingAutoRenew) {
        this.billingAutoRenew = billingAutoRenew;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_connector_list")
    public String[] meetingConnectorList;
    public AccountCreateApplicationJsonOptions withMeetingConnectorList(String[] meetingConnectorList) {
        this.meetingConnectorList = meetingConnectorList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pay_mode")
    public AccountCreateApplicationJsonOptionsPayModeEnum payMode;
    public AccountCreateApplicationJsonOptions withPayMode(AccountCreateApplicationJsonOptionsPayModeEnum payMode) {
        this.payMode = payMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("room_connector_list")
    public String[] roomConnectorList;
    public AccountCreateApplicationJsonOptions withRoomConnectorList(String[] roomConnectorList) {
        this.roomConnectorList = roomConnectorList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share_mc")
    public Boolean shareMc;
    public AccountCreateApplicationJsonOptions withShareMc(Boolean shareMc) {
        this.shareMc = shareMc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share_rc")
    public Boolean shareRc;
    public AccountCreateApplicationJsonOptions withShareRc(Boolean shareRc) {
        this.shareRc = shareRc;
        return this;
    }
}