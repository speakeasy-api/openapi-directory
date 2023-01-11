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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coverage = exports.CoverageTypeEnum = exports.CoveragePlanTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var coverageamount_1 = require("./coverageamount");
var CoveragePlanTypeEnum;
(function (CoveragePlanTypeEnum) {
    CoveragePlanTypeEnum["Ppo"] = "PPO";
    CoveragePlanTypeEnum["Hmo"] = "HMO";
    CoveragePlanTypeEnum["Unknown"] = "UNKNOWN";
})(CoveragePlanTypeEnum = exports.CoveragePlanTypeEnum || (exports.CoveragePlanTypeEnum = {}));
var CoverageTypeEnum;
(function (CoverageTypeEnum) {
    CoverageTypeEnum["Vision"] = "VISION";
    CoverageTypeEnum["Dental"] = "DENTAL";
    CoverageTypeEnum["Medical"] = "MEDICAL";
    CoverageTypeEnum["Health"] = "HEALTH";
    CoverageTypeEnum["DeathCover"] = "DEATH_COVER";
    CoverageTypeEnum["TotalPermanentDisability"] = "TOTAL_PERMANENT_DISABILITY";
    CoverageTypeEnum["AccidentalDeathCover"] = "ACCIDENTAL_DEATH_COVER";
    CoverageTypeEnum["IncomeProtection"] = "INCOME_PROTECTION";
    CoverageTypeEnum["DeathTotalPermanentDisability"] = "DEATH_TOTAL_PERMANENT_DISABILITY";
    CoverageTypeEnum["Other"] = "OTHER";
})(CoverageTypeEnum = exports.CoverageTypeEnum || (exports.CoverageTypeEnum = {}));
var Coverage = /** @class */ (function (_super) {
    __extends(Coverage, _super);
    function Coverage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount", elemType: coverageamount_1.CoverageAmount }),
        __metadata("design:type", Array)
    ], Coverage.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endDate" }),
        __metadata("design:type", String)
    ], Coverage.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=planType" }),
        __metadata("design:type", String)
    ], Coverage.prototype, "planType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startDate" }),
        __metadata("design:type", String)
    ], Coverage.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Coverage.prototype, "type", void 0);
    return Coverage;
}(utils_1.SpeakeasyBase));
exports.Coverage = Coverage;
