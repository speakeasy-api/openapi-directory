package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Account200ApplicationJsonOptions
 * Account options object.
**/
public class Account200ApplicationJsonOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing_auto_renew")
    public Boolean billingAutoRenew;
    public Account200ApplicationJsonOptions withBillingAutoRenew(Boolean billingAutoRenew) {
        this.billingAutoRenew = billingAutoRenew;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_connector_list")
    public String[] meetingConnectorList;
    public Account200ApplicationJsonOptions withMeetingConnectorList(String[] meetingConnectorList) {
        this.meetingConnectorList = meetingConnectorList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pay_mode")
    public Account200ApplicationJsonOptionsPayModeEnum payMode;
    public Account200ApplicationJsonOptions withPayMode(Account200ApplicationJsonOptionsPayModeEnum payMode) {
        this.payMode = payMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("room_connector_list")
    public String[] roomConnectorList;
    public Account200ApplicationJsonOptions withRoomConnectorList(String[] roomConnectorList) {
        this.roomConnectorList = roomConnectorList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share_mc")
    public Boolean shareMc;
    public Account200ApplicationJsonOptions withShareMc(Boolean shareMc) {
        this.shareMc = shareMc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share_rc")
    public Boolean shareRc;
    public Account200ApplicationJsonOptions withShareRc(Boolean shareRc) {
        this.shareRc = shareRc;
        return this;
    }
}