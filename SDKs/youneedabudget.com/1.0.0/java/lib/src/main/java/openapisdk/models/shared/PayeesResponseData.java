package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PayeesResponseData {
    @JsonProperty("payees")
    public Payee[] payees;
    public PayeesResponseData withPayees(Payee[] payees) {
        this.payees = payees;
        return this;
    }
    @JsonProperty("server_knowledge")
    public Long serverKnowledge;
    public PayeesResponseData withServerKnowledge(Long serverKnowledge) {
        this.serverKnowledge = serverKnowledge;
        return this;
    }
}