package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MonthDetail {
    @JsonProperty("activity")
    public Long activity;
    public MonthDetail withActivity(Long activity) {
        this.activity = activity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("age_of_money")
    public Integer ageOfMoney;
    public MonthDetail withAgeOfMoney(Integer ageOfMoney) {
        this.ageOfMoney = ageOfMoney;
        return this;
    }
    @JsonProperty("budgeted")
    public Long budgeted;
    public MonthDetail withBudgeted(Long budgeted) {
        this.budgeted = budgeted;
        return this;
    }
    @JsonProperty("categories")
    public Category[] categories;
    public MonthDetail withCategories(Category[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonProperty("deleted")
    public Boolean deleted;
    public MonthDetail withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonProperty("income")
    public Long income;
    public MonthDetail withIncome(Long income) {
        this.income = income;
        return this;
    }
    @JsonProperty("month")
    public LocalDate month;
    public MonthDetail withMonth(LocalDate month) {
        this.month = month;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public MonthDetail withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonProperty("to_be_budgeted")
    public Long toBeBudgeted;
    public MonthDetail withToBeBudgeted(Long toBeBudgeted) {
        this.toBeBudgeted = toBeBudgeted;
        return this;
    }
}