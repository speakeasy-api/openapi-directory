package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Option {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayText")
    public String displayText;
    public Option withDisplayText(String displayText) {
        this.displayText = displayText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSelected")
    public Boolean isSelected;
    public Option withIsSelected(Boolean isSelected) {
        this.isSelected = isSelected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optionValue")
    public String optionValue;
    public Option withOptionValue(String optionValue) {
        this.optionValue = optionValue;
        return this;
    }
}