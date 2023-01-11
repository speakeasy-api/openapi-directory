package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetZrLocationProfile200ApplicationJsonBasic {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public GetZrLocationProfile200ApplicationJsonBasic withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description ")
    public String description;
    public GetZrLocationProfile200ApplicationJsonBasic withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetZrLocationProfile200ApplicationJsonBasic withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_code_to_ext")
    public Boolean requiredCodeToExt;
    public GetZrLocationProfile200ApplicationJsonBasic withRequiredCodeToExt(Boolean requiredCodeToExt) {
        this.requiredCodeToExt = requiredCodeToExt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("room_passcode")
    public String roomPasscode;
    public GetZrLocationProfile200ApplicationJsonBasic withRoomPasscode(String roomPasscode) {
        this.roomPasscode = roomPasscode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("support_email")
    public String supportEmail;
    public GetZrLocationProfile200ApplicationJsonBasic withSupportEmail(String supportEmail) {
        this.supportEmail = supportEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("support_phone")
    public String supportPhone;
    public GetZrLocationProfile200ApplicationJsonBasic withSupportPhone(String supportPhone) {
        this.supportPhone = supportPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public GetZrLocationProfile200ApplicationJsonBasic withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}