package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPlans200ApplicationJsonPlanLargeMeeting
 * Account plan object.
**/
public class AccountPlans200ApplicationJsonPlanLargeMeeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hosts")
    public Long hosts;
    public AccountPlans200ApplicationJsonPlanLargeMeeting withHosts(Long hosts) {
        this.hosts = hosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_invoice_date")
    public String nextInvoiceDate;
    public AccountPlans200ApplicationJsonPlanLargeMeeting withNextInvoiceDate(String nextInvoiceDate) {
        this.nextInvoiceDate = nextInvoiceDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_effective_date")
    public String serviceEffectiveDate;
    public AccountPlans200ApplicationJsonPlanLargeMeeting withServiceEffectiveDate(String serviceEffectiveDate) {
        this.serviceEffectiveDate = serviceEffectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AccountPlans200ApplicationJsonPlanLargeMeetingStatusEnum status;
    public AccountPlans200ApplicationJsonPlanLargeMeeting withStatus(AccountPlans200ApplicationJsonPlanLargeMeetingStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AccountPlans200ApplicationJsonPlanLargeMeeting withType(String type) {
        this.type = type;
        return this;
    }
}