package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSettingTemplateApplicationJsonPolicySms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public UpdateSettingTemplateApplicationJsonPolicySms withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("international_sms")
    public Boolean internationalSms;
    public UpdateSettingTemplateApplicationJsonPolicySms withInternationalSms(Boolean internationalSms) {
        this.internationalSms = internationalSms;
        return this;
    }
}