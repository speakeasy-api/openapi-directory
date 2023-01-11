package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetZrProfile200ApplicationJsonBasic {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activation_code")
    public String activationCode;
    public GetZrProfile200ApplicationJsonBasic withActivationCode(String activationCode) {
        this.activationCode = activationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hide_room_in_contacts")
    public Boolean hideRoomInContacts;
    public GetZrProfile200ApplicationJsonBasic withHideRoomInContacts(Boolean hideRoomInContacts) {
        this.hideRoomInContacts = hideRoomInContacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetZrProfile200ApplicationJsonBasic withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_code_to_ext")
    public Boolean requiredCodeToExt;
    public GetZrProfile200ApplicationJsonBasic withRequiredCodeToExt(Boolean requiredCodeToExt) {
        this.requiredCodeToExt = requiredCodeToExt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("room_passcode")
    public String roomPasscode;
    public GetZrProfile200ApplicationJsonBasic withRoomPasscode(String roomPasscode) {
        this.roomPasscode = roomPasscode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("support_email")
    public String supportEmail;
    public GetZrProfile200ApplicationJsonBasic withSupportEmail(String supportEmail) {
        this.supportEmail = supportEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("support_phone")
    public String supportPhone;
    public GetZrProfile200ApplicationJsonBasic withSupportPhone(String supportPhone) {
        this.supportPhone = supportPhone;
        return this;
    }
}