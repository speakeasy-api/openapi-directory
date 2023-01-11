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
exports.GetAmendmentType = void 0;
var utils_1 = require("../../../internal/utils");
var GetAmendmentType = /** @class */ (function (_super) {
    __extends(GetAmendmentType, _super);
    function GetAmendmentType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoRenew" }),
        __metadata("design:type", Boolean)
    ], GetAmendmentType.prototype, "autoRenew", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=baseRatePlanId" }),
        __metadata("design:type", String)
    ], GetAmendmentType.prototype, "baseRatePlanId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=baseSubscriptionId" }),
        __metadata("design:type", String)
    ], GetAmendmentType.prototype, "baseSubscriptionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetAmendmentType.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contractEffectiveDate" }),
        __metadata("design:type", Date)
    ], GetAmendmentType.prototype, "contractEffectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currentTerm" }),
        __metadata("design:type", Number)
    ], GetAmendmentType.prototype, "currentTerm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currentTermPeriodType" }),
        __metadata("design:type", String)
    ], GetAmendmentType.prototype, "currentTermPeriodType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customerAcceptanceDate" }),
        __metadata("design:type", Date)
    ], GetAmendmentType.prototype, "customerAcceptanceDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetAmendmentType.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destinationAccountId" }),
        __metadata("design:type", String)
    ], GetAmendmentType.prototype, "destinationAccountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destinationInvoiceOwnerId" }),
        __metadata("design:type", String)
    ], GetAmendmentType.prototype, "destinationInvoiceOwnerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=effectiveDate" }),
        __metadata("design:type", Date)
    ], GetAmendmentType.prototype, "effectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetAmendmentType.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetAmendmentType.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=newRatePlanId" }),
        __metadata("design:type", String)
    ], GetAmendmentType.prototype, "newRatePlanId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=newSubscriptionId" }),
        __metadata("design:type", String)
    ], GetAmendmentType.prototype, "newSubscriptionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=renewalSetting" }),
        __metadata("design:type", String)
    ], GetAmendmentType.prototype, "renewalSetting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=renewalTerm" }),
        __metadata("design:type", Number)
    ], GetAmendmentType.prototype, "renewalTerm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=renewalTermPeriodType" }),
        __metadata("design:type", String)
    ], GetAmendmentType.prototype, "renewalTermPeriodType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resumeDate" }),
        __metadata("design:type", Date)
    ], GetAmendmentType.prototype, "resumeDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceActivationDate" }),
        __metadata("design:type", Date)
    ], GetAmendmentType.prototype, "serviceActivationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=specificUpdateDate" }),
        __metadata("design:type", Date)
    ], GetAmendmentType.prototype, "specificUpdateDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetAmendmentType.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], GetAmendmentType.prototype, "success", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=suspendDate" }),
        __metadata("design:type", Date)
    ], GetAmendmentType.prototype, "suspendDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=termStartDate" }),
        __metadata("design:type", Date)
    ], GetAmendmentType.prototype, "termStartDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=termType" }),
        __metadata("design:type", String)
    ], GetAmendmentType.prototype, "termType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetAmendmentType.prototype, "type", void 0);
    return GetAmendmentType;
}(utils_1.SpeakeasyBase));
exports.GetAmendmentType = GetAmendmentType;
