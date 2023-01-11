package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PreviewAccountInfo
 * Information about the account that will own the order.
 * 
**/
public class PreviewAccountInfo {
    @JsonProperty("billCycleDay")
    public Long billCycleDay;
    public PreviewAccountInfo withBillCycleDay(Long billCycleDay) {
        this.billCycleDay = billCycleDay;
        return this;
    }
    @JsonProperty("currency")
    public String currency;
    public PreviewAccountInfo withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public PreviewAccountInfo withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("soldToContact")
    public PreviewContactInfo soldToContact;
    public PreviewAccountInfo withSoldToContact(PreviewContactInfo soldToContact) {
        this.soldToContact = soldToContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxInfo")
    public TaxInfo taxInfo;
    public PreviewAccountInfo withTaxInfo(TaxInfo taxInfo) {
        this.taxInfo = taxInfo;
        return this;
    }
}