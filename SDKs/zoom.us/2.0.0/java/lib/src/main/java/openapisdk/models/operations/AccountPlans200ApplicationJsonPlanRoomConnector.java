package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountPlans200ApplicationJsonPlanRoomConnector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hosts")
    public Long hosts;
    public AccountPlans200ApplicationJsonPlanRoomConnector withHosts(Long hosts) {
        this.hosts = hosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_invoice_date")
    public String nextInvoiceDate;
    public AccountPlans200ApplicationJsonPlanRoomConnector withNextInvoiceDate(String nextInvoiceDate) {
        this.nextInvoiceDate = nextInvoiceDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_effective_date")
    public String serviceEffectiveDate;
    public AccountPlans200ApplicationJsonPlanRoomConnector withServiceEffectiveDate(String serviceEffectiveDate) {
        this.serviceEffectiveDate = serviceEffectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AccountPlans200ApplicationJsonPlanRoomConnectorStatusEnum status;
    public AccountPlans200ApplicationJsonPlanRoomConnector withStatus(AccountPlans200ApplicationJsonPlanRoomConnectorStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AccountPlans200ApplicationJsonPlanRoomConnector withType(String type) {
        this.type = type;
        return this;
    }
}