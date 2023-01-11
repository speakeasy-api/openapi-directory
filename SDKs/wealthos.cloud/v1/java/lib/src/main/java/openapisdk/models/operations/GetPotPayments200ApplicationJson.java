package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPotPayments200ApplicationJson {
    @JsonProperty("next_page_available")
    public Boolean nextPageAvailable;
    public GetPotPayments200ApplicationJson withNextPageAvailable(Boolean nextPageAvailable) {
        this.nextPageAvailable = nextPageAvailable;
        return this;
    }
    @JsonProperty("payments")
    public Object[] payments;
    public GetPotPayments200ApplicationJson withPayments(Object[] payments) {
        this.payments = payments;
        return this;
    }
    @JsonProperty("pot_id")
    public String potId;
    public GetPotPayments200ApplicationJson withPotId(String potId) {
        this.potId = potId;
        return this;
    }
}