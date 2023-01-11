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
 * MeetingCreateMultipartFormDataRecurrence
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time. 
**/
public class MeetingCreateMultipartFormDataRecurrence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end_date_time")
    public OffsetDateTime endDateTime;
    public MeetingCreateMultipartFormDataRecurrence withEndDateTime(OffsetDateTime endDateTime) {
        this.endDateTime = endDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_times")
    public Long endTimes;
    public MeetingCreateMultipartFormDataRecurrence withEndTimes(Long endTimes) {
        this.endTimes = endTimes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthly_day")
    public Long monthlyDay;
    public MeetingCreateMultipartFormDataRecurrence withMonthlyDay(Long monthlyDay) {
        this.monthlyDay = monthlyDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthly_week")
    public Long monthlyWeek;
    public MeetingCreateMultipartFormDataRecurrence withMonthlyWeek(Long monthlyWeek) {
        this.monthlyWeek = monthlyWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthly_week_day")
    public Long monthlyWeekDay;
    public MeetingCreateMultipartFormDataRecurrence withMonthlyWeekDay(Long monthlyWeekDay) {
        this.monthlyWeekDay = monthlyWeekDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repeat_interval")
    public Long repeatInterval;
    public MeetingCreateMultipartFormDataRecurrence withRepeatInterval(Long repeatInterval) {
        this.repeatInterval = repeatInterval;
        return this;
    }
    @JsonProperty("type")
    public Long type;
    public MeetingCreateMultipartFormDataRecurrence withType(Long type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weekly_days")
    public MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum weeklyDays;
    public MeetingCreateMultipartFormDataRecurrence withWeeklyDays(MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum weeklyDays) {
        this.weeklyDays = weeklyDays;
        return this;
    }
}