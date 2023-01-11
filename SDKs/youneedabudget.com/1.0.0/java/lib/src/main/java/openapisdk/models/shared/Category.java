package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Category {
    @JsonProperty("activity")
    public Long activity;
    public Category withActivity(Long activity) {
        this.activity = activity;
        return this;
    }
    @JsonProperty("balance")
    public Long balance;
    public Category withBalance(Long balance) {
        this.balance = balance;
        return this;
    }
    @JsonProperty("budgeted")
    public Long budgeted;
    public Category withBudgeted(Long budgeted) {
        this.budgeted = budgeted;
        return this;
    }
    @JsonProperty("category_group_id")
    public String categoryGroupId;
    public Category withCategoryGroupId(String categoryGroupId) {
        this.categoryGroupId = categoryGroupId;
        return this;
    }
    @JsonProperty("deleted")
    public Boolean deleted;
    public Category withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goal_creation_month")
    public LocalDate goalCreationMonth;
    public Category withGoalCreationMonth(LocalDate goalCreationMonth) {
        this.goalCreationMonth = goalCreationMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goal_months_to_budget")
    public Integer goalMonthsToBudget;
    public Category withGoalMonthsToBudget(Integer goalMonthsToBudget) {
        this.goalMonthsToBudget = goalMonthsToBudget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goal_overall_funded")
    public Long goalOverallFunded;
    public Category withGoalOverallFunded(Long goalOverallFunded) {
        this.goalOverallFunded = goalOverallFunded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goal_overall_left")
    public Long goalOverallLeft;
    public Category withGoalOverallLeft(Long goalOverallLeft) {
        this.goalOverallLeft = goalOverallLeft;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goal_percentage_complete")
    public Integer goalPercentageComplete;
    public Category withGoalPercentageComplete(Integer goalPercentageComplete) {
        this.goalPercentageComplete = goalPercentageComplete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goal_target")
    public Long goalTarget;
    public Category withGoalTarget(Long goalTarget) {
        this.goalTarget = goalTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goal_target_month")
    public LocalDate goalTargetMonth;
    public Category withGoalTargetMonth(LocalDate goalTargetMonth) {
        this.goalTargetMonth = goalTargetMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goal_type")
    public CategoryGoalTypeEnum goalType;
    public Category withGoalType(CategoryGoalTypeEnum goalType) {
        this.goalType = goalType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goal_under_funded")
    public Long goalUnderFunded;
    public Category withGoalUnderFunded(Long goalUnderFunded) {
        this.goalUnderFunded = goalUnderFunded;
        return this;
    }
    @JsonProperty("hidden")
    public Boolean hidden;
    public Category withHidden(Boolean hidden) {
        this.hidden = hidden;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Category withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Category withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public Category withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original_category_group_id")
    public String originalCategoryGroupId;
    public Category withOriginalCategoryGroupId(String originalCategoryGroupId) {
        this.originalCategoryGroupId = originalCategoryGroupId;
        return this;
    }
}