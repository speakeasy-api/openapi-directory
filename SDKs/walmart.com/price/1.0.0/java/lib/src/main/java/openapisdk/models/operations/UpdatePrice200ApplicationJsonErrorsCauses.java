package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePrice200ApplicationJsonErrorsCauses {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public UpdatePrice200ApplicationJsonErrorsCauses withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdatePrice200ApplicationJsonErrorsCauses withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public UpdatePrice200ApplicationJsonErrorsCauses withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UpdatePrice200ApplicationJsonErrorsCauses withType(String type) {
        this.type = type;
        return this;
    }
}