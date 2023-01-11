package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SaveTransaction {
    @JsonProperty("account_id")
    public String accountId;
    public SaveTransaction withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("amount")
    public Long amount;
    public SaveTransaction withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approved")
    public Boolean approved;
    public SaveTransaction withApproved(Boolean approved) {
        this.approved = approved;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category_id")
    public String categoryId;
    public SaveTransaction withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cleared")
    public SaveTransactionClearedEnum cleared;
    public SaveTransaction withCleared(SaveTransactionClearedEnum cleared) {
        this.cleared = cleared;
        return this;
    }
    @JsonProperty("date")
    public LocalDate date;
    public SaveTransaction withDate(LocalDate date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flag_color")
    public SaveTransactionFlagColorEnum flagColor;
    public SaveTransaction withFlagColor(SaveTransactionFlagColorEnum flagColor) {
        this.flagColor = flagColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("import_id")
    public String importId;
    public SaveTransaction withImportId(String importId) {
        this.importId = importId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo")
    public String memo;
    public SaveTransaction withMemo(String memo) {
        this.memo = memo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_id")
    public String payeeId;
    public SaveTransaction withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_name")
    public String payeeName;
    public SaveTransaction withPayeeName(String payeeName) {
        this.payeeName = payeeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subtransactions")
    public SaveSubTransaction[] subtransactions;
    public SaveTransaction withSubtransactions(SaveSubTransaction[] subtransactions) {
        this.subtransactions = subtransactions;
        return this;
    }
}