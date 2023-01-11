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
exports.GetOrderResume = exports.GetOrderResumeResumePolicyEnum = exports.GetOrderResumeResumePeriodsTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetOrderResumeResumePeriodsTypeEnum;
(function (GetOrderResumeResumePeriodsTypeEnum) {
    GetOrderResumeResumePeriodsTypeEnum["Day"] = "Day";
    GetOrderResumeResumePeriodsTypeEnum["Week"] = "Week";
    GetOrderResumeResumePeriodsTypeEnum["Month"] = "Month";
    GetOrderResumeResumePeriodsTypeEnum["Year"] = "Year";
})(GetOrderResumeResumePeriodsTypeEnum = exports.GetOrderResumeResumePeriodsTypeEnum || (exports.GetOrderResumeResumePeriodsTypeEnum = {}));
var GetOrderResumeResumePolicyEnum;
(function (GetOrderResumeResumePolicyEnum) {
    GetOrderResumeResumePolicyEnum["Today"] = "Today";
    GetOrderResumeResumePolicyEnum["FixedPeriodsFromSuspendDate"] = "FixedPeriodsFromSuspendDate";
    GetOrderResumeResumePolicyEnum["FixedPeriodsFromToday"] = "FixedPeriodsFromToday";
    GetOrderResumeResumePolicyEnum["SpecificDate"] = "SpecificDate";
    GetOrderResumeResumePolicyEnum["SuspendDate"] = "SuspendDate";
})(GetOrderResumeResumePolicyEnum = exports.GetOrderResumeResumePolicyEnum || (exports.GetOrderResumeResumePolicyEnum = {}));
// GetOrderResume
/**
 * Information about an order action of type `Resume`.
 *
**/
var GetOrderResume = /** @class */ (function (_super) {
    __extends(GetOrderResume, _super);
    function GetOrderResume() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extendsTerm" }),
        __metadata("design:type", Boolean)
    ], GetOrderResume.prototype, "extendsTerm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resumeDate" }),
        __metadata("design:type", Date)
    ], GetOrderResume.prototype, "resumeDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resumePeriods" }),
        __metadata("design:type", Number)
    ], GetOrderResume.prototype, "resumePeriods", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resumePeriodsType" }),
        __metadata("design:type", String)
    ], GetOrderResume.prototype, "resumePeriodsType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resumePolicy" }),
        __metadata("design:type", String)
    ], GetOrderResume.prototype, "resumePolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resumeSpecificDate" }),
        __metadata("design:type", Date)
    ], GetOrderResume.prototype, "resumeSpecificDate", void 0);
    return GetOrderResume;
}(utils_1.SpeakeasyBase));
exports.GetOrderResume = GetOrderResume;
