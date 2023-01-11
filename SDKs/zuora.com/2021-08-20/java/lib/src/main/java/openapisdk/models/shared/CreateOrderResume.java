package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateOrderResume
 * Information about an order action of type `Resume`.
 * 
**/
public class CreateOrderResume {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extendsTerm")
    public Boolean extendsTerm;
    public CreateOrderResume withExtendsTerm(Boolean extendsTerm) {
        this.extendsTerm = extendsTerm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resumePeriods")
    public Long resumePeriods;
    public CreateOrderResume withResumePeriods(Long resumePeriods) {
        this.resumePeriods = resumePeriods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resumePeriodsType")
    public CreateOrderResumeResumePeriodsTypeEnum resumePeriodsType;
    public CreateOrderResume withResumePeriodsType(CreateOrderResumeResumePeriodsTypeEnum resumePeriodsType) {
        this.resumePeriodsType = resumePeriodsType;
        return this;
    }
    @JsonProperty("resumePolicy")
    public CreateOrderResumeResumePolicyEnum resumePolicy;
    public CreateOrderResume withResumePolicy(CreateOrderResumeResumePolicyEnum resumePolicy) {
        this.resumePolicy = resumePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resumeSpecificDate")
    public LocalDate resumeSpecificDate;
    public CreateOrderResume withResumeSpecificDate(LocalDate resumeSpecificDate) {
        this.resumeSpecificDate = resumeSpecificDate;
        return this;
    }
}