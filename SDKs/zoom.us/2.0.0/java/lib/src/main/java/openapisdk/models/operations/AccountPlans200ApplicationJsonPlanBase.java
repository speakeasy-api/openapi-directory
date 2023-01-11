package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountPlans200ApplicationJsonPlanBase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hosts")
    public Long hosts;
    public AccountPlans200ApplicationJsonPlanBase withHosts(Long hosts) {
        this.hosts = hosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_invoice_date")
    public String nextInvoiceDate;
    public AccountPlans200ApplicationJsonPlanBase withNextInvoiceDate(String nextInvoiceDate) {
        this.nextInvoiceDate = nextInvoiceDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_effective_date")
    public String serviceEffectiveDate;
    public AccountPlans200ApplicationJsonPlanBase withServiceEffectiveDate(String serviceEffectiveDate) {
        this.serviceEffectiveDate = serviceEffectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AccountPlans200ApplicationJsonPlanBaseStatusEnum status;
    public AccountPlans200ApplicationJsonPlanBase withStatus(AccountPlans200ApplicationJsonPlanBaseStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AccountPlans200ApplicationJsonPlanBase withType(String type) {
        this.type = type;
        return this;
    }
}