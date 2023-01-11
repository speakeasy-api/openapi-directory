package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class BudgetDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accounts")
    public Account[] accounts;
    public BudgetDetail withAccounts(Account[] accounts) {
        this.accounts = accounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public Category[] categories;
    public BudgetDetail withCategories(Category[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category_groups")
    public CategoryGroup[] categoryGroups;
    public BudgetDetail withCategoryGroups(CategoryGroup[] categoryGroups) {
        this.categoryGroups = categoryGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency_format")
    public CurrencyFormat currencyFormat;
    public BudgetDetail withCurrencyFormat(CurrencyFormat currencyFormat) {
        this.currencyFormat = currencyFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_format")
    public DateFormat dateFormat;
    public BudgetDetail withDateFormat(DateFormat dateFormat) {
        this.dateFormat = dateFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_month")
    public LocalDate firstMonth;
    public BudgetDetail withFirstMonth(LocalDate firstMonth) {
        this.firstMonth = firstMonth;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public BudgetDetail withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_modified_on")
    public OffsetDateTime lastModifiedOn;
    public BudgetDetail withLastModifiedOn(OffsetDateTime lastModifiedOn) {
        this.lastModifiedOn = lastModifiedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_month")
    public LocalDate lastMonth;
    public BudgetDetail withLastMonth(LocalDate lastMonth) {
        this.lastMonth = lastMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("months")
    public MonthDetail[] months;
    public BudgetDetail withMonths(MonthDetail[] months) {
        this.months = months;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public BudgetDetail withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee_locations")
    public PayeeLocation[] payeeLocations;
    public BudgetDetail withPayeeLocations(PayeeLocation[] payeeLocations) {
        this.payeeLocations = payeeLocations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payees")
    public Payee[] payees;
    public BudgetDetail withPayees(Payee[] payees) {
        this.payees = payees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduled_subtransactions")
    public ScheduledSubTransaction[] scheduledSubtransactions;
    public BudgetDetail withScheduledSubtransactions(ScheduledSubTransaction[] scheduledSubtransactions) {
        this.scheduledSubtransactions = scheduledSubtransactions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduled_transactions")
    public ScheduledTransactionSummary[] scheduledTransactions;
    public BudgetDetail withScheduledTransactions(ScheduledTransactionSummary[] scheduledTransactions) {
        this.scheduledTransactions = scheduledTransactions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subtransactions")
    public SubTransaction[] subtransactions;
    public BudgetDetail withSubtransactions(SubTransaction[] subtransactions) {
        this.subtransactions = subtransactions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactions")
    public TransactionSummary[] transactions;
    public BudgetDetail withTransactions(TransactionSummary[] transactions) {
        this.transactions = transactions;
        return this;
    }
}