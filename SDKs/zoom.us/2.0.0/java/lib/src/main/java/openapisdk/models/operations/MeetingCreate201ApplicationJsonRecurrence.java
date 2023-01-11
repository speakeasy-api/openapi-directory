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
 * MeetingCreate201ApplicationJsonRecurrence
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time. 
**/
public class MeetingCreate201ApplicationJsonRecurrence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end_date_time")
    public OffsetDateTime endDateTime;
    public MeetingCreate201ApplicationJsonRecurrence withEndDateTime(OffsetDateTime endDateTime) {
        this.endDateTime = endDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_times")
    public Long endTimes;
    public MeetingCreate201ApplicationJsonRecurrence withEndTimes(Long endTimes) {
        this.endTimes = endTimes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthly_day")
    public Long monthlyDay;
    public MeetingCreate201ApplicationJsonRecurrence withMonthlyDay(Long monthlyDay) {
        this.monthlyDay = monthlyDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthly_week")
    public Long monthlyWeek;
    public MeetingCreate201ApplicationJsonRecurrence withMonthlyWeek(Long monthlyWeek) {
        this.monthlyWeek = monthlyWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthly_week_day")
    public Long monthlyWeekDay;
    public MeetingCreate201ApplicationJsonRecurrence withMonthlyWeekDay(Long monthlyWeekDay) {
        this.monthlyWeekDay = monthlyWeekDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repeat_interval")
    public Long repeatInterval;
    public MeetingCreate201ApplicationJsonRecurrence withRepeatInterval(Long repeatInterval) {
        this.repeatInterval = repeatInterval;
        return this;
    }
    @JsonProperty("type")
    public Long type;
    public MeetingCreate201ApplicationJsonRecurrence withType(Long type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weekly_days")
    public MeetingCreate201ApplicationJsonRecurrenceWeeklyDaysEnum weeklyDays;
    public MeetingCreate201ApplicationJsonRecurrence withWeeklyDays(MeetingCreate201ApplicationJsonRecurrenceWeeklyDaysEnum weeklyDays) {
        this.weeklyDays = weeklyDays;
        return this;
    }
}