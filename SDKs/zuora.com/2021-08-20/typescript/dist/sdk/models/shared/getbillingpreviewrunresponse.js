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
exports.GetBillingPreviewRunResponse = void 0;
var utils_1 = require("../../../internal/utils");
// GetBillingPreviewRunResponse
/**
 * get billingPreviewRun response
**/
var GetBillingPreviewRunResponse = /** @class */ (function (_super) {
    __extends(GetBillingPreviewRunResponse, _super);
    function GetBillingPreviewRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assumeRenewal" }),
        __metadata("design:type", String)
    ], GetBillingPreviewRunResponse.prototype, "assumeRenewal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batch" }),
        __metadata("design:type", String)
    ], GetBillingPreviewRunResponse.prototype, "batch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeTypeToExclude" }),
        __metadata("design:type", String)
    ], GetBillingPreviewRunResponse.prototype, "chargeTypeToExclude", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdById" }),
        __metadata("design:type", String)
    ], GetBillingPreviewRunResponse.prototype, "createdById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdDate" }),
        __metadata("design:type", String)
    ], GetBillingPreviewRunResponse.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endDate" }),
        __metadata("design:type", String)
    ], GetBillingPreviewRunResponse.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorMessage" }),
        __metadata("design:type", String)
    ], GetBillingPreviewRunResponse.prototype, "errorMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includingEvergreenSubscription" }),
        __metadata("design:type", Boolean)
    ], GetBillingPreviewRunResponse.prototype, "includingEvergreenSubscription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resultFileUrl" }),
        __metadata("design:type", String)
    ], GetBillingPreviewRunResponse.prototype, "resultFileUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runNumber" }),
        __metadata("design:type", String)
    ], GetBillingPreviewRunResponse.prototype, "runNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startDate" }),
        __metadata("design:type", String)
    ], GetBillingPreviewRunResponse.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBillingPreviewRunResponse.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=succeededAccounts" }),
        __metadata("design:type", Number)
    ], GetBillingPreviewRunResponse.prototype, "succeededAccounts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], GetBillingPreviewRunResponse.prototype, "success", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetDate" }),
        __metadata("design:type", Date)
    ], GetBillingPreviewRunResponse.prototype, "targetDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalAccounts" }),
        __metadata("design:type", Number)
    ], GetBillingPreviewRunResponse.prototype, "totalAccounts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedById" }),
        __metadata("design:type", String)
    ], GetBillingPreviewRunResponse.prototype, "updatedById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedDate" }),
        __metadata("design:type", Date)
    ], GetBillingPreviewRunResponse.prototype, "updatedDate", void 0);
    return GetBillingPreviewRunResponse;
}(utils_1.SpeakeasyBase));
exports.GetBillingPreviewRunResponse = GetBillingPreviewRunResponse;
