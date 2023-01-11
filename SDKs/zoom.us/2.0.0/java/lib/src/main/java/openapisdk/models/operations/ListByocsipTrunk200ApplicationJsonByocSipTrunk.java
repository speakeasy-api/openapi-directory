package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListByocsipTrunk200ApplicationJsonByocSipTrunk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier")
    public String carrier;
    public ListByocsipTrunk200ApplicationJsonByocSipTrunk withCarrier(String carrier) {
        this.carrier = carrier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_account")
    public String carrierAccount;
    public ListByocsipTrunk200ApplicationJsonByocSipTrunk withCarrierAccount(String carrierAccount) {
        this.carrierAccount = carrierAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListByocsipTrunk200ApplicationJsonByocSipTrunk withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListByocsipTrunk200ApplicationJsonByocSipTrunk withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public ListByocsipTrunk200ApplicationJsonByocSipTrunk withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sbc_label")
    public String sbcLabel;
    public ListByocsipTrunk200ApplicationJsonByocSipTrunk withSbcLabel(String sbcLabel) {
        this.sbcLabel = sbcLabel;
        return this;
    }
}