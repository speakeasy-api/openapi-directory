/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * JobScheduleExecutionInformation - Specifies how tasks should be run in a job associated with a job schedule.
 */
public class JobScheduleExecutionInformation {
    /**
     * Gets or sets the time at which the schedule ended. This property is set only if the job schedule is in the completed state.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;

    public JobScheduleExecutionInformation withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    
    /**
     * Gets or sets the next time at which a job will be created under this schedule.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("nextRunTime")
    public OffsetDateTime nextRunTime;

    public JobScheduleExecutionInformation withNextRunTime(OffsetDateTime nextRunTime) {
        this.nextRunTime = nextRunTime;
        return this;
    }
    
    /**
     * Information about the most recent job to run under the job schedule.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recentJob")
    public RecentJob recentJob;

    public JobScheduleExecutionInformation withRecentJob(RecentJob recentJob) {
        this.recentJob = recentJob;
        return this;
    }
    
    public JobScheduleExecutionInformation(){}
}
