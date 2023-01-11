package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * WebinarCreate201ApplicationJsonRecurrenceWebinar
 * Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time. 
**/
public class WebinarCreate201ApplicationJsonRecurrenceWebinar {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end_date_time")
    public OffsetDateTime endDateTime;
    public WebinarCreate201ApplicationJsonRecurrenceWebinar withEndDateTime(OffsetDateTime endDateTime) {
        this.endDateTime = endDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_times")
    public Long endTimes;
    public WebinarCreate201ApplicationJsonRecurrenceWebinar withEndTimes(Long endTimes) {
        this.endTimes = endTimes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthly_day")
    public Long monthlyDay;
    public WebinarCreate201ApplicationJsonRecurrenceWebinar withMonthlyDay(Long monthlyDay) {
        this.monthlyDay = monthlyDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthly_week")
    public Long monthlyWeek;
    public WebinarCreate201ApplicationJsonRecurrenceWebinar withMonthlyWeek(Long monthlyWeek) {
        this.monthlyWeek = monthlyWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthly_week_day")
    public Long monthlyWeekDay;
    public WebinarCreate201ApplicationJsonRecurrenceWebinar withMonthlyWeekDay(Long monthlyWeekDay) {
        this.monthlyWeekDay = monthlyWeekDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repeat_interval")
    public Long repeatInterval;
    public WebinarCreate201ApplicationJsonRecurrenceWebinar withRepeatInterval(Long repeatInterval) {
        this.repeatInterval = repeatInterval;
        return this;
    }
    @JsonProperty("type")
    public Long type;
    public WebinarCreate201ApplicationJsonRecurrenceWebinar withType(Long type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weekly_days")
    public String weeklyDays;
    public WebinarCreate201ApplicationJsonRecurrenceWebinar withWeeklyDays(String weeklyDays) {
        this.weeklyDays = weeklyDays;
        return this;
    }
}