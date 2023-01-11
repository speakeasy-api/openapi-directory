package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateZrAccProfileApplicationJsonBasic {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_code_to_ext")
    public Boolean requiredCodeToExt;
    public UpdateZrAccProfileApplicationJsonBasic withRequiredCodeToExt(Boolean requiredCodeToExt) {
        this.requiredCodeToExt = requiredCodeToExt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("room_passcode")
    public String roomPasscode;
    public UpdateZrAccProfileApplicationJsonBasic withRoomPasscode(String roomPasscode) {
        this.roomPasscode = roomPasscode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("support_email")
    public String supportEmail;
    public UpdateZrAccProfileApplicationJsonBasic withSupportEmail(String supportEmail) {
        this.supportEmail = supportEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("support_phone")
    public String supportPhone;
    public UpdateZrAccProfileApplicationJsonBasic withSupportPhone(String supportPhone) {
        this.supportPhone = supportPhone;
        return this;
    }
}