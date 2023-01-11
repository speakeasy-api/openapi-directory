package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OptionalDateTimeContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("day")
    public Integer day;
    public OptionalDateTimeContract withDay(Integer day) {
        this.day = day;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formatted")
    public String formatted;
    public OptionalDateTimeContract withFormatted(String formatted) {
        this.formatted = formatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isEmpty")
    public Boolean isEmpty;
    public OptionalDateTimeContract withIsEmpty(Boolean isEmpty) {
        this.isEmpty = isEmpty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("month")
    public Integer month;
    public OptionalDateTimeContract withMonth(Integer month) {
        this.month = month;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Integer year;
    public OptionalDateTimeContract withYear(Integer year) {
        this.year = year;
        return this;
    }
}