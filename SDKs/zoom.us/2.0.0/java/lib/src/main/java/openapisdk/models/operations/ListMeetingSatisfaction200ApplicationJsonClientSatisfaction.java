package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMeetingSatisfaction200ApplicationJsonClientSatisfaction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public LocalDate date;
    public ListMeetingSatisfaction200ApplicationJsonClientSatisfaction withDate(LocalDate date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("good_count")
    public Long goodCount;
    public ListMeetingSatisfaction200ApplicationJsonClientSatisfaction withGoodCount(Long goodCount) {
        this.goodCount = goodCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("none_count")
    public Long noneCount;
    public ListMeetingSatisfaction200ApplicationJsonClientSatisfaction withNoneCount(Long noneCount) {
        this.noneCount = noneCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("not_good_count")
    public Long notGoodCount;
    public ListMeetingSatisfaction200ApplicationJsonClientSatisfaction withNotGoodCount(Long notGoodCount) {
        this.notGoodCount = notGoodCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("satisfaction_percent")
    public Long satisfactionPercent;
    public ListMeetingSatisfaction200ApplicationJsonClientSatisfaction withSatisfactionPercent(Long satisfactionPercent) {
        this.satisfactionPercent = satisfactionPercent;
        return this;
    }
}