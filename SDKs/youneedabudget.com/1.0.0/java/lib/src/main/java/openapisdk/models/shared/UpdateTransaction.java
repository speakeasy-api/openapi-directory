package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateTransaction {
    @JsonProperty("account_id")
    public String accountId;
    public UpdateTransaction withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("amount")
    public Long amount;
    public UpdateTransaction withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approved")
    public Boolean approved;
    public UpdateTransaction withApproved(Boolean approved) {
        this.approved = approved;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category_id")
    public String categoryId;
    public UpdateTransaction withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cleared")
    public UpdateTransactionClearedEnum cleared;
    public UpdateTransaction withCleared(UpdateTransactionClearedEnum cleared) {
        this.cleared = cleared;
        return this;
    }
    @JsonProperty("date")
    public LocalDate date;
    public UpdateTransaction withDate(LocalDate date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flag_color")
    public UpdateTransactionFlagColorEnum flagColor;
    public UpdateTransaction withFlagColor(UpdateTransactionFlagColorEnum flagColor) {
        this.flagColor = flagColor;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public UpdateTransaction withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("import_id")
    public String importId;
    public UpdateTransaction withImportId(String importId) {
        this.importId = importId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo")
    public String memo;
    public UpdateTransaction withMemo(String memo) {
        this.memo = memo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_id")
    public String payeeId;
    public UpdateTransaction withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_name")
    public String payeeName;
    public UpdateTransaction withPayeeName(String payeeName) {
        this.payeeName = payeeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subtransactions")
    public SaveSubTransaction[] subtransactions;
    public UpdateTransaction withSubtransactions(SaveSubTransaction[] subtransactions) {
        this.subtransactions = subtransactions;
        return this;
    }
}