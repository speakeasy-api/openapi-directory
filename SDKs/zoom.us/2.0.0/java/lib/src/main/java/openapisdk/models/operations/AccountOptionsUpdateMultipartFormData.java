package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * AccountOptionsUpdateMultipartFormData
 * Account options object.
**/
public class AccountOptionsUpdateMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=billing_auto_renew")
    public Boolean billingAutoRenew;
    public AccountOptionsUpdateMultipartFormData withBillingAutoRenew(Boolean billingAutoRenew) {
        this.billingAutoRenew = billingAutoRenew;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=meeting_connector_list,json")
    public String[] meetingConnectorList;
    public AccountOptionsUpdateMultipartFormData withMeetingConnectorList(String[] meetingConnectorList) {
        this.meetingConnectorList = meetingConnectorList;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=pay_mode")
    public AccountOptionsUpdateMultipartFormDataPayModeEnum payMode;
    public AccountOptionsUpdateMultipartFormData withPayMode(AccountOptionsUpdateMultipartFormDataPayModeEnum payMode) {
        this.payMode = payMode;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=room_connector_list,json")
    public String[] roomConnectorList;
    public AccountOptionsUpdateMultipartFormData withRoomConnectorList(String[] roomConnectorList) {
        this.roomConnectorList = roomConnectorList;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=share_mc")
    public Boolean shareMc;
    public AccountOptionsUpdateMultipartFormData withShareMc(Boolean shareMc) {
        this.shareMc = shareMc;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=share_rc")
    public Boolean shareRc;
    public AccountOptionsUpdateMultipartFormData withShareRc(Boolean shareRc) {
        this.shareRc = shareRc;
        return this;
    }
}