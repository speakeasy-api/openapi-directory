package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Account {
    @JsonProperty("balance")
    public Long balance;
    public Account withBalance(Long balance) {
        this.balance = balance;
        return this;
    }
    @JsonProperty("cleared_balance")
    public Long clearedBalance;
    public Account withClearedBalance(Long clearedBalance) {
        this.clearedBalance = clearedBalance;
        return this;
    }
    @JsonProperty("closed")
    public Boolean closed;
    public Account withClosed(Boolean closed) {
        this.closed = closed;
        return this;
    }
    @JsonProperty("deleted")
    public Boolean deleted;
    public Account withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direct_import_in_error")
    public Boolean directImportInError;
    public Account withDirectImportInError(Boolean directImportInError) {
        this.directImportInError = directImportInError;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direct_import_linked")
    public Boolean directImportLinked;
    public Account withDirectImportLinked(Boolean directImportLinked) {
        this.directImportLinked = directImportLinked;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Account withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Account withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public Account withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonProperty("on_budget")
    public Boolean onBudget;
    public Account withOnBudget(Boolean onBudget) {
        this.onBudget = onBudget;
        return this;
    }
    @JsonProperty("transfer_payee_id")
    public String transferPayeeId;
    public Account withTransferPayeeId(String transferPayeeId) {
        this.transferPayeeId = transferPayeeId;
        return this;
    }
    @JsonProperty("type")
    public AccountTypeEnum type;
    public Account withType(AccountTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("uncleared_balance")
    public Long unclearedBalance;
    public Account withUnclearedBalance(Long unclearedBalance) {
        this.unclearedBalance = unclearedBalance;
        return this;
    }
}