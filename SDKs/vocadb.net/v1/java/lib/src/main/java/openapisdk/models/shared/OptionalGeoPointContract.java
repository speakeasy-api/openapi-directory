package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OptionalGeoPointContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formatted")
    public String formatted;
    public OptionalGeoPointContract withFormatted(String formatted) {
        this.formatted = formatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasValue")
    public Boolean hasValue;
    public OptionalGeoPointContract withHasValue(Boolean hasValue) {
        this.hasValue = hasValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Double latitude;
    public OptionalGeoPointContract withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Double longitude;
    public OptionalGeoPointContract withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
}