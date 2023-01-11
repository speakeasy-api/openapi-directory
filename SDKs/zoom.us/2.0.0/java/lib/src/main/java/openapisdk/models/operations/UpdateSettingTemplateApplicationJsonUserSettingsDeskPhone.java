package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSettingTemplateApplicationJsonUserSettingsDeskPhone {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pin_code")
    public String pinCode;
    public UpdateSettingTemplateApplicationJsonUserSettingsDeskPhone withPinCode(String pinCode) {
        this.pinCode = pinCode;
        return this;
    }
}