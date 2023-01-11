package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSettingTemplate200ApplicationJsonProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("area_code")
    public String areaCode;
    public GetSettingTemplate200ApplicationJsonProfile withAreaCode(String areaCode) {
        this.areaCode = areaCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public GetSettingTemplate200ApplicationJsonProfile withCountry(String country) {
        this.country = country;
        return this;
    }
}