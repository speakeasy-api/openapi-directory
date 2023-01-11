package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutReverseInvoiceType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyEffectiveDate")
    public LocalDate applyEffectiveDate;
    public PutReverseInvoiceType withApplyEffectiveDate(LocalDate applyEffectiveDate) {
        this.applyEffectiveDate = applyEffectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoDate")
    public LocalDate memoDate;
    public PutReverseInvoiceType withMemoDate(LocalDate memoDate) {
        this.memoDate = memoDate;
        return this;
    }
}