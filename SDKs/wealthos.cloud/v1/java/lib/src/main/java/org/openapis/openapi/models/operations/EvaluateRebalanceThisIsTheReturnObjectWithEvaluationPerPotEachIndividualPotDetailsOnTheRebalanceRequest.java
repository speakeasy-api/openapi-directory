/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest - Each individual pot details on the rebalance request
 */
public class EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest {
    /**
     * Unique ID of the Investors attached to the pot
     */
    @JsonProperty("investor_id")
    public String investorId;

    public EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest withInvestorId(String investorId) {
        this.investorId = investorId;
        return this;
    }
    
    /**
     * Portfolio deviation for the pot
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portfolio_deviation")
    public String portfolioDeviation;

    public EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest withPortfolioDeviation(String portfolioDeviation) {
        this.portfolioDeviation = portfolioDeviation;
        return this;
    }
    
    /**
     * Unique ID of the portfolio attached to the pot
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portfolio_template_id")
    public String portfolioTemplateId;

    public EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest withPortfolioTemplateId(String portfolioTemplateId) {
        this.portfolioTemplateId = portfolioTemplateId;
        return this;
    }
    
    /**
     * Identifier of pot evaluated for rebalance
     */
    @JsonProperty("pot_id")
    public String potId;

    public EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest withPotId(String potId) {
        this.potId = potId;
        return this;
    }
    
    /**
     * Status of whether a pot is capable of rebalance or not
     */
    @JsonProperty("rebalance_eligibility_status")
    public EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum rebalanceEligibilityStatus;

    public EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest withRebalanceEligibilityStatus(EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum rebalanceEligibilityStatus) {
        this.rebalanceEligibilityStatus = rebalanceEligibilityStatus;
        return this;
    }
    
    public EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest(@JsonProperty("investor_id") String investorId, @JsonProperty("pot_id") String potId, @JsonProperty("rebalance_eligibility_status") EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum rebalanceEligibilityStatus) {
        this.investorId = investorId;
        this.potId = potId;
        this.rebalanceEligibilityStatus = rebalanceEligibilityStatus;
  }
}
