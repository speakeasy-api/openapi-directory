package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePhoneSiteApplicationJson {
    @JsonProperty("auto_receptionist_name")
    public String autoReceptionistName;
    public CreatePhoneSiteApplicationJson withAutoReceptionistName(String autoReceptionistName) {
        this.autoReceptionistName = autoReceptionistName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_emergency_address")
    public CreatePhoneSiteApplicationJsonDefaultEmergencyAddress defaultEmergencyAddress;
    public CreatePhoneSiteApplicationJson withDefaultEmergencyAddress(CreatePhoneSiteApplicationJsonDefaultEmergencyAddress defaultEmergencyAddress) {
        this.defaultEmergencyAddress = defaultEmergencyAddress;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreatePhoneSiteApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("short_extension")
    public CreatePhoneSiteApplicationJsonShortExtension shortExtension;
    public CreatePhoneSiteApplicationJson withShortExtension(CreatePhoneSiteApplicationJsonShortExtension shortExtension) {
        this.shortExtension = shortExtension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_code")
    public Long siteCode;
    public CreatePhoneSiteApplicationJson withSiteCode(Long siteCode) {
        this.siteCode = siteCode;
        return this;
    }
}