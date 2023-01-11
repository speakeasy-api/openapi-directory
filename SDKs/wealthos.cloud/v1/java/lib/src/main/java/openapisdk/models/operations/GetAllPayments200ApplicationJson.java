package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAllPayments200ApplicationJson {
    @JsonProperty("next_page_available")
    public Boolean nextPageAvailable;
    public GetAllPayments200ApplicationJson withNextPageAvailable(Boolean nextPageAvailable) {
        this.nextPageAvailable = nextPageAvailable;
        return this;
    }
    @JsonProperty("payments")
    public Object[] payments;
    public GetAllPayments200ApplicationJson withPayments(Object[] payments) {
        this.payments = payments;
        return this;
    }
}