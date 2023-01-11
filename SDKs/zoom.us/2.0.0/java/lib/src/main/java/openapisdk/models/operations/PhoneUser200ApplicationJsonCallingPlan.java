package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PhoneUser200ApplicationJsonCallingPlan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public PhoneUser200ApplicationJsonCallingPlan withType(Long type) {
        this.type = type;
        return this;
    }
}