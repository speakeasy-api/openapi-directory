package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetaPaymentGatwayResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetaPaymentGatwayResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isActive")
    public Boolean isActive;
    public GetaPaymentGatwayResponse withIsActive(Boolean isActive) {
        this.isActive = isActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDefault")
    public Boolean isDefault;
    public GetaPaymentGatwayResponse withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetaPaymentGatwayResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetaPaymentGatwayResponse withType(String type) {
        this.type = type;
        return this;
    }
}