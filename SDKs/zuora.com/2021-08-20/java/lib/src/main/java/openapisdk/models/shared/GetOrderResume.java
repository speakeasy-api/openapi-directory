package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetOrderResume
 * Information about an order action of type `Resume`.
 * 
**/
public class GetOrderResume {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extendsTerm")
    public Boolean extendsTerm;
    public GetOrderResume withExtendsTerm(Boolean extendsTerm) {
        this.extendsTerm = extendsTerm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resumeDate")
    public LocalDate resumeDate;
    public GetOrderResume withResumeDate(LocalDate resumeDate) {
        this.resumeDate = resumeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resumePeriods")
    public Long resumePeriods;
    public GetOrderResume withResumePeriods(Long resumePeriods) {
        this.resumePeriods = resumePeriods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resumePeriodsType")
    public GetOrderResumeResumePeriodsTypeEnum resumePeriodsType;
    public GetOrderResume withResumePeriodsType(GetOrderResumeResumePeriodsTypeEnum resumePeriodsType) {
        this.resumePeriodsType = resumePeriodsType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resumePolicy")
    public GetOrderResumeResumePolicyEnum resumePolicy;
    public GetOrderResume withResumePolicy(GetOrderResumeResumePolicyEnum resumePolicy) {
        this.resumePolicy = resumePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resumeSpecificDate")
    public LocalDate resumeSpecificDate;
    public GetOrderResume withResumeSpecificDate(LocalDate resumeSpecificDate) {
        this.resumeSpecificDate = resumeSpecificDate;
        return this;
    }
}