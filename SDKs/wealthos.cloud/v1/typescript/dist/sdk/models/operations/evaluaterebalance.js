"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluateRebalanceResponse = exports.EvaluateRebalanceRequest = exports.EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot = exports.EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest = exports.EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum = exports.EvaluateRebalanceSecurity = exports.EvaluateRebalanceSwitchInstructionRequest = exports.EvaluateRebalanceSwitchInstructionRequestTypeEnum = exports.EvaluateRebalanceHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EvaluateRebalanceHeaders = /** @class */ (function (_super) {
    __extends(EvaluateRebalanceHeaders, _super);
    function EvaluateRebalanceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], EvaluateRebalanceHeaders.prototype, "xApiKey", void 0);
    return EvaluateRebalanceHeaders;
}(utils_1.SpeakeasyBase));
exports.EvaluateRebalanceHeaders = EvaluateRebalanceHeaders;
var EvaluateRebalanceSwitchInstructionRequestTypeEnum;
(function (EvaluateRebalanceSwitchInstructionRequestTypeEnum) {
    EvaluateRebalanceSwitchInstructionRequestTypeEnum["Pot"] = "pot";
    EvaluateRebalanceSwitchInstructionRequestTypeEnum["Investor"] = "investor";
    EvaluateRebalanceSwitchInstructionRequestTypeEnum["Portfolio"] = "portfolio";
})(EvaluateRebalanceSwitchInstructionRequestTypeEnum = exports.EvaluateRebalanceSwitchInstructionRequestTypeEnum || (exports.EvaluateRebalanceSwitchInstructionRequestTypeEnum = {}));
// EvaluateRebalanceSwitchInstructionRequest
/**
 * Definition of Switch instruction
**/
var EvaluateRebalanceSwitchInstructionRequest = /** @class */ (function (_super) {
    __extends(EvaluateRebalanceSwitchInstructionRequest, _super);
    function EvaluateRebalanceSwitchInstructionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], EvaluateRebalanceSwitchInstructionRequest.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], EvaluateRebalanceSwitchInstructionRequest.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], EvaluateRebalanceSwitchInstructionRequest.prototype, "values", void 0);
    return EvaluateRebalanceSwitchInstructionRequest;
}(utils_1.SpeakeasyBase));
exports.EvaluateRebalanceSwitchInstructionRequest = EvaluateRebalanceSwitchInstructionRequest;
var EvaluateRebalanceSecurity = /** @class */ (function (_super) {
    __extends(EvaluateRebalanceSecurity, _super);
    function EvaluateRebalanceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiSecretKey)
    ], EvaluateRebalanceSecurity.prototype, "apiSecretKey", void 0);
    return EvaluateRebalanceSecurity;
}(utils_1.SpeakeasyBase));
exports.EvaluateRebalanceSecurity = EvaluateRebalanceSecurity;
var EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum;
(function (EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum) {
    EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum["Eligible"] = "eligible";
    EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum["Ineligible"] = "ineligible";
    EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum["NoPortfolioAttached"] = "no_portfolio_attached";
    EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum["NegativeHoldings"] = "negative_holdings";
    EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum["NoHoldings"] = "no_holdings";
})(EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum = exports.EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum || (exports.EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum = {}));
// EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest
/**
 * Each individual pot details on the rebalance request
**/
var EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest = /** @class */ (function (_super) {
    __extends(EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest, _super);
    function EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=investor_id" }),
        __metadata("design:type", String)
    ], EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest.prototype, "investorId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolio_deviation" }),
        __metadata("design:type", String)
    ], EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest.prototype, "portfolioDeviation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolio_template_id" }),
        __metadata("design:type", String)
    ], EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest.prototype, "portfolioTemplateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pot_id" }),
        __metadata("design:type", String)
    ], EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest.prototype, "potId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rebalance_eligibility_status" }),
        __metadata("design:type", String)
    ], EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest.prototype, "rebalanceEligibilityStatus", void 0);
    return EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest;
}(utils_1.SpeakeasyBase));
exports.EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest = EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest;
// EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot
/**
 * contains array for pot details
**/
var EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot = /** @class */ (function (_super) {
    __extends(EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot, _super);
    function EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=evaluation_response", elemType: EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest }),
        __metadata("design:type", Array)
    ], EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot.prototype, "evaluationResponse", void 0);
    return EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot;
}(utils_1.SpeakeasyBase));
exports.EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot = EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot;
var EvaluateRebalanceRequest = /** @class */ (function (_super) {
    __extends(EvaluateRebalanceRequest, _super);
    function EvaluateRebalanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EvaluateRebalanceHeaders)
    ], EvaluateRebalanceRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", EvaluateRebalanceSwitchInstructionRequest)
    ], EvaluateRebalanceRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EvaluateRebalanceSecurity)
    ], EvaluateRebalanceRequest.prototype, "security", void 0);
    return EvaluateRebalanceRequest;
}(utils_1.SpeakeasyBase));
exports.EvaluateRebalanceRequest = EvaluateRebalanceRequest;
var EvaluateRebalanceResponse = /** @class */ (function (_super) {
    __extends(EvaluateRebalanceResponse, _super);
    function EvaluateRebalanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EvaluateRebalanceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], EvaluateRebalanceResponse.prototype, "evaluateRebalance400ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], EvaluateRebalanceResponse.prototype, "evaluateRebalance401ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], EvaluateRebalanceResponse.prototype, "evaluateRebalance403ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], EvaluateRebalanceResponse.prototype, "evaluateRebalance404ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], EvaluateRebalanceResponse.prototype, "evaluateRebalance409ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], EvaluateRebalanceResponse.prototype, "evaluateRebalance429ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], EvaluateRebalanceResponse.prototype, "evaluateRebalance500ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EvaluateRebalanceResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot)
    ], EvaluateRebalanceResponse.prototype, "thisIsTheReturnObjectWithEvaluationPerPot", void 0);
    return EvaluateRebalanceResponse;
}(utils_1.SpeakeasyBase));
exports.EvaluateRebalanceResponse = EvaluateRebalanceResponse;
