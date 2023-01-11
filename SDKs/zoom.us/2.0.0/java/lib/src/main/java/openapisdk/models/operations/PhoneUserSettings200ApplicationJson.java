package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PhoneUserSettings200ApplicationJson
 * Phone User Setting
**/
public class PhoneUserSettings200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("area_code")
    public String areaCode;
    public PhoneUserSettings200ApplicationJson withAreaCode(String areaCode) {
        this.areaCode = areaCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company_number")
    public String companyNumber;
    public PhoneUserSettings200ApplicationJson withCompanyNumber(String companyNumber) {
        this.companyNumber = companyNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desk_phone")
    public PhoneUserSettings200ApplicationJsonDeskPhone deskPhone;
    public PhoneUserSettings200ApplicationJson withDeskPhone(PhoneUserSettings200ApplicationJsonDeskPhone deskPhone) {
        this.deskPhone = deskPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_caller")
    public PhoneUserSettings200ApplicationJsonOutboundCaller outboundCaller;
    public PhoneUserSettings200ApplicationJson withOutboundCaller(PhoneUserSettings200ApplicationJsonOutboundCaller outboundCaller) {
        this.outboundCaller = outboundCaller;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_caller_ids")
    public PhoneUserSettings200ApplicationJsonOutboundCallerIds outboundCallerIds;
    public PhoneUserSettings200ApplicationJson withOutboundCallerIds(PhoneUserSettings200ApplicationJsonOutboundCallerIds outboundCallerIds) {
        this.outboundCallerIds = outboundCallerIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_mail")
    public PhoneUserSettings200ApplicationJsonVoiceMail voiceMail;
    public PhoneUserSettings200ApplicationJson withVoiceMail(PhoneUserSettings200ApplicationJsonVoiceMail voiceMail) {
        this.voiceMail = voiceMail;
        return this;
    }
}