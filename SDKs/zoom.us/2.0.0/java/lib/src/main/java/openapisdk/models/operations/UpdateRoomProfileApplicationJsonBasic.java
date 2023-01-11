package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateRoomProfileApplicationJsonBasic {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hide_room_in_contacts")
    public Boolean hideRoomInContacts;
    public UpdateRoomProfileApplicationJsonBasic withHideRoomInContacts(Boolean hideRoomInContacts) {
        this.hideRoomInContacts = hideRoomInContacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateRoomProfileApplicationJsonBasic withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_code_to_ext")
    public Boolean requiredCodeToExt;
    public UpdateRoomProfileApplicationJsonBasic withRequiredCodeToExt(Boolean requiredCodeToExt) {
        this.requiredCodeToExt = requiredCodeToExt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("room_passcode")
    public String roomPasscode;
    public UpdateRoomProfileApplicationJsonBasic withRoomPasscode(String roomPasscode) {
        this.roomPasscode = roomPasscode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("support_email")
    public String supportEmail;
    public UpdateRoomProfileApplicationJsonBasic withSupportEmail(String supportEmail) {
        this.supportEmail = supportEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("support_phone")
    public String supportPhone;
    public UpdateRoomProfileApplicationJsonBasic withSupportPhone(String supportPhone) {
        this.supportPhone = supportPhone;
        return this;
    }
}