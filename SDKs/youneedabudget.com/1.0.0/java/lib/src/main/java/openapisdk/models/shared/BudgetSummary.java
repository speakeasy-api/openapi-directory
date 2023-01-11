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

public class BudgetSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accounts")
    public Account[] accounts;
    public BudgetSummary withAccounts(Account[] accounts) {
        this.accounts = accounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency_format")
    public CurrencyFormat currencyFormat;
    public BudgetSummary withCurrencyFormat(CurrencyFormat currencyFormat) {
        this.currencyFormat = currencyFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_format")
    public DateFormat dateFormat;
    public BudgetSummary withDateFormat(DateFormat dateFormat) {
        this.dateFormat = dateFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_month")
    public LocalDate firstMonth;
    public BudgetSummary withFirstMonth(LocalDate firstMonth) {
        this.firstMonth = firstMonth;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public BudgetSummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_modified_on")
    public OffsetDateTime lastModifiedOn;
    public BudgetSummary withLastModifiedOn(OffsetDateTime lastModifiedOn) {
        this.lastModifiedOn = lastModifiedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_month")
    public LocalDate lastMonth;
    public BudgetSummary withLastMonth(LocalDate lastMonth) {
        this.lastMonth = lastMonth;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public BudgetSummary withName(String name) {
        this.name = name;
        return this;
    }
}