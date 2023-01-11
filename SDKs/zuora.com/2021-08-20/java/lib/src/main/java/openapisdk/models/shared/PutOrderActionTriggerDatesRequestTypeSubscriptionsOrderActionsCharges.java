package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeNumber")
    public String chargeNumber;
    public PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges withChargeNumber(String chargeNumber) {
        this.chargeNumber = chargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specificTriggerDate")
    public LocalDate specificTriggerDate;
    public PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges withSpecificTriggerDate(LocalDate specificTriggerDate) {
        this.specificTriggerDate = specificTriggerDate;
        return this;
    }
}