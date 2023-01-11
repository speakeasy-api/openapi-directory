package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSettingTemplateMultipartFormDataProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("area_code")
    public String areaCode;
    public UpdateSettingTemplateMultipartFormDataProfile withAreaCode(String areaCode) {
        this.areaCode = areaCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public UpdateSettingTemplateMultipartFormDataProfile withCountry(String country) {
        this.country = country;
        return this;
    }
}