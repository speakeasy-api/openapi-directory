package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PayeeLocation {
    @JsonProperty("deleted")
    public Boolean deleted;
    public PayeeLocation withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public PayeeLocation withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("latitude")
    public String latitude;
    public PayeeLocation withLatitude(String latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("longitude")
    public String longitude;
    public PayeeLocation withLongitude(String longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("payee_id")
    public String payeeId;
    public PayeeLocation withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
}